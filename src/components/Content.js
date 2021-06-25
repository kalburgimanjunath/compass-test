import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Schedule from '../pages/Schedule';
import Alarm from '../pages/Alarm';
import Products from '../pages/Products';
import Customers from '../pages/Customers';
import DataViewer from '../pages/DataViewer';
import MainPage from '../pages/MainPage';
import TreeView from './TreeView';
import TopDisplay from '../pages/TopDisplay';
export default function Content(){
    let { path, url } = useRouteMatch();
    let { id } = useParams();
    return(
        <div className="col-md-11 text-start">  
        <TreeView/>          
            <Router>        
                <Switch>
                    
                    <Route path="/dashboard/:id" children={<Child />} />
                    <Route path="/dashboard">
                        <MainPage />
                    </Route> 
                                                     
                </Switch>
            </Router>
        </div>
    );
}

function Child() {
    let { id } = useParams();  
    return (
      <>
        <span className="fs-4">{id}</span>
        
        {id == 'schedule' ? <Schedule/>:''}
        {id == 'alarm-manager' ? <Alarm/>:''}
        {id == 'products' ? <Products/>:''}
        {id == 'customers' ? <Customers/>:''}
        {id == 'data-viewer' ? <DataViewer/>:''}
        {id == 'top-display' ? <TopDisplay/>:''}
        {id == 'user-session' ? <TopDisplay/>:''}
        {id == 'kanban' ? <TopDisplay/>:''}
        
      </>
    );
}