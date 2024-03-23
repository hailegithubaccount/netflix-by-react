import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import Youtube from 'react-youtube';


const Row = ({title,fetchURl,islargeRow}) => {
const [Movies,setMovies]=useState([]);
const [trailerUrl,setTraileUrl]=useState("");

const base_url="https://image.tmdb.org/t/p/original";


useEffect(()=>{
  (async ()=> {
    try{
      console.log(fetchURl)
      const request=await axios.get(fetchURl);
      console.log(request)
      setMovies(request.data.results);
    } catch(error){
      console.log("error",error);
    }
    
  })()
},[fetchURl]);
const handlclick=(movie)=>{
  if(trailerUrl){
   setTraileUrl("");
  }else{
    movieTrailer(movie?.title ||movie?.name || movie?.original_name)
    .then((url)=>{
      console.log(url);
      const urlParams =new URLSearchParams(new URL(url).search)
      console.log(urlParams)
      console.log(urlParams.get('v'))
      setTraileUrl(urlParams.get('v'));






    })
  }
}

const opts={
height:'390',
width:'100%',
playerVars:{
  autoplay:1,
},
}






  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_posters'>
        {Movies?.map((movie,index)=>(
          <img 
          onClick={()=>handlclick(movie)}
          key={index} src={`${base_url}${islargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name} className={`row_poster${islargeRow} && "row_posterLarge"}`}

/>

        ))}





      </div>
      <div style={{padding:'40px'}}>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
      
    </div>
  )
}

export default Row
