import { Col, List, Progress, Row } from "antd";
import React from "react";
import { imageUrl } from "../services/api";
import moment from "moment";
import { HeartFilled, BookFilled, StarFilled } from "@ant-design/icons";

const MovieMetadata = ({ movie, crew }) => {
  const genres = movie.genres.map((genre) => genre.table.name);
  const duration = `${Math.floor(movie.runtime / 60)}hs${movie.runtime % 60}m`;
  const releaseYear = moment(movie.releaseDate).format("YYYY");

  const MovieFirstLine = () => {
    return (
      <>
        <h2 style={{ color: "white" }}>{`${movie.title} (${releaseYear})`}</h2>
        <p>
          {`${moment(movie.releaseDate).format("MMMM D, YYYY")}
          (US)`}{" "}
          &bull; {genres.join(", ")} &bull; {duration}
        </p>
      </>
    );
  };

  const UserScore = () => {
    const vote = parseFloat(movie.voteAverage) * 10;

    return (
      <Row>
        <Progress
          strokeColor={"#50d86a"}
          trailColor={"#103517"}
          type="circle"
          percent={vote}
          width={42}
          style={{ marginRight: "20px" }}
        />
        <p style={{ maxWidth: "25px", marginRight: "32px" }}>User Score</p>
        <HeartFilled style={{ fontSize: "18px", marginLeft: "32px" }} />
        <BookFilled style={{ fontSize: "18px", marginLeft: "32px" }} />
        <StarFilled style={{ fontSize: "18px", marginLeft: "32px" }} />
      </Row>
    );
  };

  const OverView = () => {
    return (
      <>
        <h3 style={{ color: "white" }}>Overview</h3>
        <p>{movie.overview}</p>
      </>
    );
  };

  const Crew = () => {
    const CrewItem = ({ crew }) => {
      return (
        <>
          <p
            style={{
              color: "white",
              fontSize: "12px",
              fontWeight: "bold",
              marginBottom: 0,
              marginTop: "2rem",
            }}
          >
            {crew.name}
          </p>
          <p style={{ color: "white", fontSize: "12px" }}>{crew.job}</p>
        </>
      );
    };
    return (
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
        dataSource={crew}
        renderItem={(item) => (
          <List.Item>
            <CrewItem crew={item} />
          </List.Item>
        )}
      />
    );
  };

  return (
    <>
      <Col span={6}>
        <img
          alt={`Movie poster for ${movie.title}`}
          src={imageUrl(movie.posterPath)}
          style={{
            borderRadius: "20px",
            width: "250px",
          }}
        />
      </Col>
      <Col span={18}>
        <MovieFirstLine />
        <UserScore />
        <OverView />
        <Crew />
      </Col>
    </>
  );
};

export default MovieMetadata;
