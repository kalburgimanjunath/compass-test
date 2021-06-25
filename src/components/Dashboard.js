import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
export default function Dasbboard(){
    return(
        <div className="row">
            <div className="row"><Header/></div>
            <div className="row">
                <Sidebar/>
                <Content/>
            </div>
            
        </div>
    );
}