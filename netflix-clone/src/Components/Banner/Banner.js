import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './Banner.css';

export default function Banner() {
    const[Movies,setMovies]=useState({});

    useEffect(()=>{
        (async()=>{
            try{
                const request=await axios.get(requests.fetchNetflixOriginals)
                console.log(request)
                setMovies(request.data.results[
                    Math.floor(Math.random()*request.data.results.length)
                ]);
                
            } catch(error){
                console.log("error",error);
            }
            
    })()
    },[]);
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+'...':str;
    }
  return (
    <div
        className="banner"
        style={{
            background:"cover",
            backgroundImage:`url('https://image.tmdb.org/t/p/original${Movies?.backdrop_path}')`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"
        }}
         

        >
            <div className='banner_contents'>
                <h1 className='banner-title'>
                    { Movies?.title || Movies?.name || Movies?.original_name}
                </h1>
            <div className="banner_buttons">
                <button className='banner_button play'>play</button>
                <button className='banner_button'>my list</button>
            </div>
       
       <h1 className='banner_description'>
        {truncate(Movies?.overview,150)}</h1>    
    </div>
    <div className='banner_fadeBottom'/>
    </div>
  )
}
