// import React from 'react';
import React, { useMemo, useState, useEffect } from "react";
import { NavLink as Link, Switch, Route } from 'react-router-dom';
import Table from "./Table";
// import child components
import Counter  from '../counter';
import  {Post } from '../post';

// export entry application component
export default function AppComp () {
    
   
        console.log( 'App.render()' );
        const data = 
        [
            {
              "score": 17.592657,
              "show": {
                "id": 44813,
                "url": "http://www.tvmaze.com/shows/44813/the-snow-spider",
                "name": "The Snow Spider",
                "type": "Scripted",
                "language": "English",
                "genres": [
                  "Drama",
                  "Fantasy"
                ],
                "status": "In Development",
                "runtime": 30,
                "premiered": null,
                "officialSite": null,
                "schedule": {
                  "time": "",
                  "days": [
          
                  ]
                }
            }}]
               
        const columns = useMemo(
            () => [
              {
                // first group - TV Show
                Header: "TV Show",
                // First group columns
                columns: [
                  {
                    Header: "Name",
                    accessor: "show.name"
                  },
                  {
                    Header: "Type",
                    accessor: "show.type"
                  }
                ]
              },
              {
                // Second group - Details
                Header: "Details",
                // Second group columns
                columns: [
                  {
                    Header: "Language",
                    accessor: "show.language"
                  },
                  {
                    Header: "Genre(s)",
                    accessor: "show.genres"
                  },
                  {
                    Header: "Runtime",
                    accessor: "show.runtime"
                  },
                  {
                      Header: "Status",
                    accessor: "show.status"
                  }
                ]
              }
            ],
            []
          );
        
        return (
            <div >
               
               <Table columns={columns} data={data} />
               
            </div>
        );
    };
  //  export default AppComp;