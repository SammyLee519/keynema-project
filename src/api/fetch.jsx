// fetchData data 불러오기 (tmdb data 전부)

const BASE_URL = "https://api.themoviedb.org/3";

const defaultParams = {
  api_key: import.meta.env.VITE_TMBD_API_KEY,
  language: "ko-KR",
};

export const fetchData = async (endpoint, extraParams = {}) => {
  const params = new URLSearchParams({ ...defaultParams, ...extraParams });
  const url = `${BASE_URL}${endpoint}?${params}`;

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OTHER_SECRET}`,
    },
  });
  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`);
  }
  return response.json();
};

// 무한스크롤 - TopRated Movie
export const fetchTopRagedMovies = async ({ pageParam = 1 }) => {
  const data = await fetchData("/movie/top_rated", { page: pageParam });
  return {
    results: data.results,
    nextPage: data.page + 1,
    totalPages: data.total_pages,
  };
};

// 무한스크롤 - Popular Movie
export const fetchPopularMovies = async ({ pageParam = 1 }) => {
  const data = await fetchData("/movie/popular", { page: pageParam });
  return {
    results: data.results,
    nextPage: data.page + 1,
    totalPages: data.total_pages,
  };
};

// 무한스크롤 - Similar Movies
export const fetchSimilarMovies = async ({ movieId, pageParam }) => {
  const data = await fetchData(`/movie/${movieId}/similar`, {
    page: pageParam,
  });
  return {
    results: data.results,
    nextPage: data.page + 1,
    totalPages: data.total_pages,
  };
};
