import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

export default function Rowlist() {
  return (
    <div>
      <Row 
      title="NETFLIX ORIGINALS"
      fetchURl={requests.fetchNetflixOriginals}
       islargeRow={true}/>
       <Row 
       title="trending now"
       fetchURl={requests.fetchTrending}
       islargeRow={true}

       />
       <Row
       title="Top Rated Movies"
       fetchURl={requests.fetchTopRatedMovies}
       islargeRow={true}
       />
    </div>
  )
}
