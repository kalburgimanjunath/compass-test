import React, { Component } from 'react';
import Cards from '../components/Cards';
import "bootstrap";
export default function Crousal(){
    var myCarousel = document.querySelector('#carouselExampleControls')
    // var carousel = new bootstrap.Carousel(myCarousel);
    return(
        <div className="row">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Cards type="horizontal"/>
                    </div>
                    <div className="carousel-item">
                        <Cards type="horizontal"/>
                    </div>
                    <div className="carousel-item">
                        <Cards type="horizontal"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>    
        </div>
          
    );
}