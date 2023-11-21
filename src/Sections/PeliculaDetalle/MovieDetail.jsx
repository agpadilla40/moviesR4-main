import React from "react";
import { useLocation } from "react-router-dom";
import './MovieDetail.css';

export default function MovieDetail(props) {

    const location = useLocation();
    const movie = location.state;
    
    return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="h1-custom">{movie.titulo}</h1>
                </div>
            </div> 
                
            <div className="row">
                <div className="col">    
                    <img src={movie.portada} className="detail-moview-img" alt="" />
                </div>

                <div className="col">  
                    <h2 className="text-color1">{movie.titulo}</h2>
                    <p className="text-color1">Reparto: </p>

                    <ul className="text-custom">
                        {movie.actores.map((actor, index) => {
                            return <li key={index}>{actor}</li>
                        })}
                    </ul>
                    <p className="text-color1">Género: {movie.genero}</p>
                    <p className="text-color1">Duración: {movie.duracion}</p>
                    <p className="text-color1">Director: {movie.director}</p>
                    <p className="text-color1">Año: {movie.anio}</p>
                    <p className="text-color1">Calificación: {movie.calificacion}</p>
                    <p className="text-color1">Trailer: </p>
                    <a href={movie.triler} target="_blank" rel="noopener noreferrer" alt="No disponible" className="text-color2">{movie.triler}</a>
                </div>
            </div>
            <br />
            <div className="row">
                    <p className="text-color1">Sinopsis: {movie.sinopsis}</p>
            </div>
        </div>
    </>
    )
}

