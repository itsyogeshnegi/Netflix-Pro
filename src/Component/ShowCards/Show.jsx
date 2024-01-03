import React from 'react'
import './Show.css'
import Cards from '../Cards/Cards'
import requests from '../../ApiRequestData'
const Show = () => {
  return (
    <div className="netflixbanner">
      <Cards title={"Originals"} fetchURL={requests.fetchNetflixOriginals} />
      <Cards title={"Best Movies"} fetchURL={requests.fetchBestOne} />
      <Cards title={"Trending"} fetchURL={requests.fetchTrending} />
      <Cards title={"Play"} fetchURL={requests.fetchPlay} />
      <Cards title={"Top Rated"} fetchURL={requests.fetchTopRated} />
      <Cards title={"Popular"} fetchURL={requests.fetchPopular} />
      <Cards title={"Best Movies"} fetchURL={requests.fetchBestMovies} />
      <Cards title={"Kids Movies"} fetchURL={requests.fetchKids} />
      <Cards title={"Drama"} fetchURL={requests.fetchDrama} />
      <Cards title={"sci-fi"} fetchURL={requests.fetchscifi} />
      <Cards title={"Theater"} fetchURL={requests.fetchTheater} />
      <Cards title={"Highest Rated"} fetchURL={requests.fetchHighest} />
      {/* <Cards title={"USA Movies"} fetchURL={requests.fetchUSA} /> */}
      <Cards title={"Comedy"} fetchURL={requests.fetchComedy} />
      <Cards title={"Anime"} fetchURL={requests.fetchAnime} />
    </div>
  );
}

export default Show