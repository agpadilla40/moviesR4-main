import React from 'react'
import CarouselComponet from '../../Componets/newCarousel/CarouselComponet.jsx'
import ListaPeliculas from '../ListaPeliculas/ListaPeliculas.jsx'

export default function HomeSon() {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <CarouselComponet/>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col">
                    <ListaPeliculas genero="home" />
                </div>
            </div>
        </div>
        </>
    )
}