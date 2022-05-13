import React from 'react'
import Banner from './Banner'
import "./Homescreen.css"
import Nav from './Nav'
import requests from './Request'
import Row from './Row'

function HomeScreen() {
  return (
    <div className='homescreen'>
    {/* // nav */}
    <Nav/>
    <Banner/>
    <Row  
     title="NETFLIX ORIGINALS"
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow
    />
     <Row  
     title="NETFLIX COMEDY"
     fetchUrl={requests.fetchComedyMovies}
  
    />
     <Row  
     title="NETFLIX ACTTION"
     fetchUrl={requests.fetchActionMovies}
    
    />
     <Row  
     title="NETFLIX DOCUMENTERY"
     fetchUrl={requests.fetchDocumentaries}
   
    />
     <Row  
     title="NETFLIX TOP RATED"
     fetchUrl={requests.fetchNetflixOriginals}
   
    />
 <Row  
     title="NETFLIX ROMANCE"
     fetchUrl={requests.fetchRomanceMovies}
     
    />
     <Row  
     title="NETFLIX HORROR"
     fetchUrl={requests.fetchHorrorMovies}

    
    />
     <Row  
     title="NETFLIX Trending"
     fetchUrl={requests.fetchTrending}
     
    
    />

















    </div>
  )
}

export default HomeScreen