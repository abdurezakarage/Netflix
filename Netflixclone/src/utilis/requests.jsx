const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fechmovies:
    "/discover/movie?api_key={API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  fechtv:
    "/discover/tv?api_key={API_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
};
export default requests