import React from 'react';
import Navbar from './Navbar';
export default function Breadcrum(){
    return (
        <div className="row">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                    <li>
                    <div className="breadcrumb-item dropdown">
                        <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        down
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
                            <a className="nav-link" href="#">disable session timeout</a>
                            </li>
                            <li className="dropdown-item">
                            <a className="nav-link" href="#" aria-disabled="true">logout</a>
                            </li>
                        </ul>
                    </div>
                    </li>
                </ol>
            </nav>
        </div>
        
    )
}