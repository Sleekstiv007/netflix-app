const key = "1da83bef630924dcbed1814b195062d5";

const request = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&languages=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&languages=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&languages=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&languages=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&languages=en-US&page=1`,
};

export default request;
