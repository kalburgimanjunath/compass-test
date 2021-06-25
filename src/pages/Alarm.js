import React, { Component } from 'react';
import Table from '../components/Table'
export default function Alarm(){
    const dataSource = [{
        "status":'1',
        "description":'test',
        "count ":'1',
        "live data":'100',
        "priority":1,
        "most recent occurrence":'yes',
        "acked by":'yes',
        "acked time":'10AM',
        "avg duration":'01'
    },
    {
        "status":'1',
        "description":'test',
        "count ":'1',
        "live data":'100',
        "priority":1,
        "most recent occurrence":'yes',
        "acked by":'yes',
        "acked time":'10AM',
        "avg duration":'01'
    }
    ];
    return(
        <div>
            <h1>Alarm Manager </h1>
            <Table data-source={dataSource}/>        
        </div>
          
    );
}