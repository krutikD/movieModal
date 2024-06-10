import './Movie.css'
import { Backdrop } from './Backdrop'
import { MovieModal } from './Moviemodal';
import React, { useState } from 'react';
 

function Movie(props) {
  let [modalO,modalC]=useState(false)
    function clickHandler(){
      modalC(true)
        console.log(props.title)
    }
    function closeModal(){
      modalC(false)
    }
  return (
    <>
      <div className="movie-card">
        <img
          src={props.img}
          className='img-res'
          onClick={clickHandler}
          alt=""
        />
        <h3 className="movie-name" >{props.title}</h3>
        <h6 className="release-year">{props.year}</h6>
      </div>
      {modalO?<MovieModal title={props.title} description={props.description} year={props.year} genre={props.genre} img={props.img}/>:null}
      {modalO?<Backdrop onClick={closeModal}/>:null}
    </>
  );
}
export default Movie;
