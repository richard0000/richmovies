import { Card } from "antd";
import React from "react";

const MovieCard = ({ movie }) => {
  return <Card title={movie.title}>Card content</Card>;
};

export default MovieCard;
