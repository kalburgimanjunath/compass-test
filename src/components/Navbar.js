import React, { Component } from 'react';
export default function Navbar(){
    return(
        <div className="row">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Compass DL Logo / <span>Dealer Logo</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                </div>
                <div className="col-md-offset-8 col-md-3">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle btn-outline-success" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Manjunath Kalburgi
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="dropdown-item">
                                <a className="nav-link active" aria-current="page" href="#">show point tooltip</a>
                                </li>
                                <li className="dropdown-item">
                                <a className="nav-link" href="#">enable autoscaling</a>
                                </li>
                                <li className="dropdown-item">
                                <a className="nav-link disabled" href="#" aria-disabled="true">change password</a>
                                </li>
                                <li className="dropdown-item">
                                <a className="nav-link" href="#" >disable session timeout</a>
                                </li>
                                <li className="dropdown-item">
                                <a className="nav-link" href="#" aria-disabled="true">logout</a>
                                </li>
                            </ul>
                        </div>
                </div>
                </nav>
        </div>
    );
}