
const requests={
    fetchTrending: `/trending/all/week?api_key=ccf99bb7baa7727b992fb24d66bd2aeb&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=ccf99bb7baa7727b992fb24d66bd2aeb&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=ccf99bb7baa7727b992fb24d66bd2aeb&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=ccf99bb7baa7727b992fb24d66bd2aeb&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=ccf99bb7baa7727b992fb24d66bd2aeb&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=ccf99bb7baa7727b992fb24d66bd2aeb&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=ccf99bb7baa7727b992fb24d66bd2aeb&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=ccf99bb7baa7727b992fb24d66bd2aeb&with_genres=99`,
    fetchPopularTvShows: `/tv/popular?api_key=ccf99bb7baa7727b992fb24d66bd2aeb&language=en-US&page=1`
    









};
export default requests;