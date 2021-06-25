import React, { Component } from 'react';
import Crousal from '../components/Crousal';
import Cards from '../components/Cards';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  

export default function MainPage(){
    
    return(
        <div className="row">            
            <div className="col-md-8">
                <div className="MainContainer">
                    <img src="data:image/png;base64,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" className="card-img-top" alt="..."/>
                </div>
                <hr/>
                <Crousal/>  
            </div>
            <div className="col-md-4">
                {/* Relationship Pane */}
                <Cards type="vertical"/>
            </div>    
        </div>
          
    );
}