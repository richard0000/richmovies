import { Card, Progress } from "antd";
import _ from "lodash";
import React from "react";
import { imageUrl } from "../services/api";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <Card
      hoverable
      onClick={() => handleMovieClick()}
      bordered={false}
      style={{
        width: 250,
        minHeight: 425,
        margin: "20px",
        borderRadius: "20px",
        overflow: "hidden",
        padding: "12px",
        cursor: "pointer",
      }}
      cover={
        <img
          alt={`Movie poster for ${movie.title}`}
          src={imageUrl(movie.posterPath)}
          style={{
            borderRadius: "20px",
          }}
        />
      }
    >
      <MovieCardFooter movie={movie} />
    </Card>
  );
};

const MovieCardFooter = ({ movie }) => {
  const vote = parseFloat(movie.voteAverage) * 10;

  return (
    <>
      <Progress
        style={{ position: "relative", top: "-20px", left: "175px" }}
        strokeColor={"#50d86a"}
        trailColor={"#103517"}
        type="circle"
        percent={vote}
        width={32}
      />
      <p
        style={{
          color: "white",
          fontSize: "12px",
          fontWeight: "bold",
          marginBottom: 0,
        }}
      >
        {movie.title}
      </p>
      <p style={{ fontSize: "12px" }}>
        {moment(movie.releaseDate).format("MMM D, YYYY")}
      </p>
    </>
  );
};

export default MovieCard;
