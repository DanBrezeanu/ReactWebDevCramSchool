import React from 'react'

export default function Painting({ data }) {
    return (    
        <>
          <img
            className="d-block w-50 mx-auto"
            src={data.image}
          />

          <div className="d-block text-center">
            <p> {data.title} </p>
            <h3> {data.name} </h3>
            <h5> {data.year} </h5>  
          </div>
        </>
    )
}
