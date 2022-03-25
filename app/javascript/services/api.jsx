import _ from "lodash";
import xhr from "lib/xhr";

export const imageUrl = (imageSlug) =>
  `https://image.tmdb.org/t/p/w500/${imageSlug}`;
export const apiUrl = (path) => `/api/v1/${path}`;

export const fetchMovies = async () => {
  const url = apiUrl(`movies`);
  return await xhr.get(url);
};

export const fetchMoviePoster = async (id) => {
  const url = apiUrl(`movies/${id}/poster`);
  return await xhr.get(url);
};
