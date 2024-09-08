const API_KEY = '33531a7c519ed49d68d61350c7622e05';
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-Us`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks= 213`,
  fetchTopratedmovies: `/movie/top_rated?api_key=${API_KEY}&language=en.Us`,
  fechActionmovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fechComedymovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fechHorrormovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomancemovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en.Us& page=1`,
};
export default requests;
