import React from 'react';
import './Header.css'
import movies from './movies.jpg';
import series from './series.jpg';
import Link from 'react';
import { useNavigate } from "react-router-dom";


const Content = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Select a cateogory</h1>
            
            <div className="choose" onClick={() => navigate("/movies")}>
                 <img src={movies}></img>
                 <h4>Popular movies</h4>
            </div>
            <div className="choose" onClick={() => navigate("/series")}>
                 <img src={series}></img>
                 <h4>Popular series</h4>
            </div>
            
        </div>
    )
}

export default Content
