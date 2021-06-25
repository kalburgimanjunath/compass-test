import React, { Component } from 'react';
export default function Cards({type='horizontal'}){
    const cardSource = [
        {
            "title":"supply temperature control1",
            "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            "date":"Last updated 3 mins ago"
        },
        {
            "title":"supply temperature control2",
            "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            "date":"Last updated 3 mins ago"
        },
        {
            "title":"supply temperature control3",
            "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            "date":"Last updated 3 mins ago"
        }
    ];
    const cardSourceVertical = [
        {
            "title":"systems",
            "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            "date":"Last updated 3 mins ago"
        },
        {
            "title":"application profiles",
            "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            "date":"Last updated 3 mins ago"
        },
        {
            "title":"zones",
            "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            "date":"Last updated 3 mins ago"
        },
        {
            "title":"alarm history",
            "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            "date":"Last updated 3 mins ago"
        }
    ]
    return(
        <div> 
            
            { type === 'horizontal' ? (
                <div className="row row-cols-1 row-cols-md-3 g-4">  
                {
                            cardSource.map(item=>{
                                return (
                                    <div key={item.title}  className="col">
                                        <div className="card h-100">
                                        <img src="..." className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">{item.date}</small>
                                        </div>
                                        </div>
                                    </div>
                                );
                            })
                }
                </div> 
            ):(
                <div>
                    {
                        cardSourceVertical.map(item=>{
                            return (
                                <div key={item.title} className="card text-dark bg-light mb-3">
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            )}        
                     
        </div>
          
    );
}