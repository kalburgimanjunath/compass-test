import React, { Component } from 'react';
export default function Table(dataSource){
    const dataTitles = [
        "status",
        "description",
        "count ",
        "live data",
        "priority",
        "most recent occurrence",
        "acked by",
        "acked time",
        "avg duration"
    ];   
    return(
        <div>
            <table className="table table-hover">
                <thead>
                <tr>
                    {dataTitles.map(item =>{
                        return <th>{item}</th>
                    })}
                </tr>
                </thead>
                {/* <tr>
                        {Object.keys(dataSource).map(key => {                    
                            return <option value={key}>{dataSource[key]}</option>
                        })}
                </tr> */}
               
            </table>       
        </div>
          
    );
}