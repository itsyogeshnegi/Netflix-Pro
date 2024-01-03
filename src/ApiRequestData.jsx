const API_KEY = "01119e8533d38c65e3f92ff109a11b3b";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchAnime: `/tv/animation?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPlay: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSameMovie: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchVideoData: `/movie/{movie_id}/videos?api_key=${API_KEY}&language=en-US`,
    fetchBestMovies: `/discover/movie?api_key=${API_KEY}&primary_release_year=20&sort_by=vote_average.desc`,
    fetchKids: `/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
    fetchUSA: `/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=action.desc`,
    fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18&sort_by=vote_average.desc`,
    fetchscifi: `/discover/movie?api_key=${API_KEY}&with_genres=878&with_cast=500&sort_by=vote_average.desc`,
    fetchTheater: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2022-10-22`,
    fetchHighest: `/discover/movie?api_key=${API_KEY}&certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_cast=23659&sort_by=revenue.desc,`
}

export default requests;

