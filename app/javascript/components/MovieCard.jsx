import { Card, Skeleton } from "antd";
import _ from "lodash";
import React from "react";
import { imageUrl } from "../services/api";
import moment from "moment";

const MovieCard = ({ movie }) => {
  return (
    <Card
      bordered={false}
      style={{
        width: 250,
        height: 450,
        margin: "20px",
        borderRadius: "20px",
        overflow: "hidden",
        padding: "12px",
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
      <p>{`${vote}%`}</p>
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
