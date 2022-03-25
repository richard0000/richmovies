import { Card, Skeleton } from "antd";
import _ from "lodash";
import React from "react";
import { imageUrl } from "../services/api";
import moment from "moment";

const MovieCard = ({ movie }) => {
  return (
    <Card
      style={{ width: 150 }}
      cover={
        <img
          alt={`Movie poster for ${movie.title}`}
          src={imageUrl(movie.posterPath)}
        />
      }
    >
      <MovieCardFooter movie={movie} />
    </Card>
  );
};

const MovieCardFooter = ({ movie }) => {
  return (
    <>
      <p>{movie.title}</p>
      <p>{moment(movie.releaseDate).format("MMM D, YYYY")}</p>
    </>
  );
};

export default MovieCard;
