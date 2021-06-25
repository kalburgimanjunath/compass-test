import React, { Component } from 'react';
export default function DataViewer(){
    return(
        <div className="row">
            <div className="col-md-4">
                <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                <label className="form-check-label" for="exampleRadios1">
                    Day
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                <label className="form-check-label" for="exampleRadios2">
                    Week
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                <label className="form-check-label" for="exampleRadios3">
                    Month
                </label>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">End Date/Time</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>  
            </div> 
            <div className="col-md-8">
                graphs here
            </div>        
        </div>
          
    );
}