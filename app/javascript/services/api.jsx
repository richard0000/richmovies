import _ from "lodash";
import xhr from "lib/xhr";

export const imageUrl = (imageSlug) =>
  `https://image.tmdb.org/t/p/w500/${imageSlug}`;
export const apiUrl = (path) => `/api/v1/${path}`;

export const fetchCast = async (id) => {
  const url = apiUrl(`movies/${id}/cast`);
  return await xhr.get(url);
};

export const fetchCrew = async (id) => {
  const url = apiUrl(`movies/${id}/crew`);
  return await xhr.get(url);
};

export const fetchMovie = async (id) => {
  const url = apiUrl(`movies/${id}`);
  return await xhr.get(url);
};

export const fetchMovies = async () => {
  const url = apiUrl(`movies`);
  return await xhr.get(url);
};

export const fetchMoviePoster = async (id) => {
  const url = apiUrl(`movies/${id}/poster`);
  return await xhr.get(url);
};
