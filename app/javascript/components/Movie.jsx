import { Alert, Col, Empty, List, Row, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast, fetchCrew, fetchMovie, imageUrl } from "../services/api";
import CastCard from "./CastCard";
import Main from "./Main";
import MovieMetadata from "./MovieMetadata";

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const { id } = useParams();

  const handleFetchMovie = () => {
    setLoading(true);
    fetchMovie(id)
      .then((response) => {
        setMovie(response.table);
      })
      .catch((r) => {
        setErrors(r.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleFetchCast = () => {
    setLoading(true);
    fetchCast(id)
      .then((response) => {
        setCast(response);
      })
      .catch((r) => {
        setErrors(r.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleFetchCrew = () => {
    setLoading(true);
    fetchCrew(id)
      .then((response) => {
        let responseCrew = response.map((c) => c.table);
        setCrew(responseCrew);
      })
      .catch((r) => {
        setErrors(r.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!_.isUndefined(id)) {
      handleFetchMovie();
      handleFetchCast();
      handleFetchCrew();
    }
  }, [id]);

  return (
    <Main>
      {loading ? (
        <Skeleton />
      ) : movie ? (
        <>
          {errors ? <Alert message={errors} type="error" /> : ""}
          <Row
            style={{
              backgroundImage: `url(${imageUrl(movie.posterPath)})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: 0.05,
              height: "25rem",
            }}
          ></Row>
          <Row style={{ position: "relative", top: "-25rem" }}>
            <MovieMetadata movie={movie} crew={crew} />
          </Row>
          <Row style={{ position: "relative", top: "-20rem" }}>
            {cast ? (
              <>
                <h2 style={{ color: "white" }}>Top Billed Cast</h2>
                <List
                  grid={{
                    xs: 3,
                    sm: 3,
                    md: 6,
                    lg: 8,
                    xl: 8,
                    xxl: 12,
                    gutter: 16,
                  }}
                  dataSource={cast}
                  renderItem={(item) => (
                    <List.Item>
                      <CastCard cast={item} />
                    </List.Item>
                  )}
                />
              </>
            ) : (
              ""
            )}
          </Row>
        </>
      ) : (
        <Empty></Empty>
      )}
    </Main>
  );
};

export default Movie;
