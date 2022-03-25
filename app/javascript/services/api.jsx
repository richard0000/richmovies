import _ from "lodash";
import xhr from "lib/xhr";

export const apiUrl = (path) => `/api/v1/${path}`;

export const fetchMovies = async () => {
  const url = apiUrl(`movies`);
  return await xhr.get(url);
};
