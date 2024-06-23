import './Movie.css'
import { Backdrop } from './Backdrop'
import { MovieModal } from './Moviemodal';
import React, { useState } from 'react';
 

function Movie({data}) {
  // const {title,description,img,year,genre}=data
  let [modal,Setmodal]=useState(false)
    function clickHandler(){
      Setmodal(true)
        
    }
    function closeModal(){
      Setmodal(false)
    }
  return (
    <>
      <div className="movie-card">
        <img
          src={data.img}
          className='img-res'
          onClick={clickHandler}
          alt=""
        />
        <h3 className="movie-name" >{data.title}</h3>
        <h6 className="release-year">{data.year}</h6>
      </div>
      {modal?<MovieModal title={data.title} description={data.description} year={data.year} genre={data.genre} img={data.img}/>:null}
      {modal?<Backdrop onClick={closeModal}/>:null}
    </>
  );
}
export default Movie;
