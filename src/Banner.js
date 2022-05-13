import React, { useEffect, useState } from 'react'
import "./Banner.css"
import banner from './img/a.jpg'
import axios from "./axios"
import requests from './Request'


function Banner() {

    const [movie,setmovie]= useState([]);

    useEffect(()=>{
        async function fetchdata(){
        const request= await axios.get(requests.fetchNetflixOriginals);
        setmovie(
            request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ]
        );
        return request;
        }
  fetchdata();
    },[]);
    //console.log(movie);

      function truncate(string , n){
          return string ?.length>n ? string.substr(0,n-1)+ '...': string;
      }

  return (
    <header className='banner'
    
    style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.
        backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPostion:"center center ",
    }}
    >
       

    <div className='banner_content'>
        <h1 className='banner_title'> 
        {movie?.title|| movie?.name|| movie?.orgnal_name}
        
        </h1>
      <div className='banner_button'>
          <button className='banner_button'> play</button>
          <button className='banner_button'>add to list</button>
      </div>
      <h1 className='banner_desc'>
          {truncate(movie?.overview,300)}
      </h1>
    </div>
    <div className='banner_fad' />

    </header>
   
  )
}

export default Banner