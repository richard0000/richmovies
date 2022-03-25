import React, { useEffect, useState } from "react";
import { List, Card, Alert, Skeleton } from "antd";
import Main from "./Main";
import { fetchMovies } from "../services/api";
import MovieCard from "./MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleFetchMovies = () => {
    setLoading(true);
    fetchMovies()
      .then((response) => {
        const responseMovies = response.map((movie) => movie.table);
        setMovies(responseMovies);
      })
      .catch((r) => {
        setErrors(r.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (_.isEmpty(movies)) handleFetchMovies();
  }, []);

  return (
    <Main>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          {errors ? <Alert message={errors} type="error" /> : ""}
          <List
            grid={{
              xs: 1,
              sm: 1,
              md: 2,
              lg: 4,
              xl: 4,
              xxl: 6,
              gutter: 16,
            }}
            dataSource={movies}
            renderItem={(item) => (
              <List.Item>
                <MovieCard movie={item} />
              </List.Item>
            )}
          />
        </>
      )}
    </Main>
  );
};

export default Movies;
