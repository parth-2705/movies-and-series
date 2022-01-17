import React from 'react';
import Data from '../data.json';
import './Movies.css';
export const Shows = () => {
    var count=0
    return (
        <>
        <h1 className="title">Series</h1>
        <div className="movie-cont">
             
            {Data.sort((a, b) => a.title > b.title ? 1 : -1).map((movie, index) => {
                if(movie.programType==="series" && movie.releaseYear>2010){
                count++
                if(count<=21)
                return <div className="movie-box">
                       <img className="poster" src={movie.images.poster.url}/>
                       <h3>{movie.title}</h3>
                       
                       
                       
                    </div>}
            })}
        </div>
        </>
    )
}

export default Shows
