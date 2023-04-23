import React from 'react'


export default function Painting({ data }) {
    return (    
        <>
          <img
            className="d-block mx-auto formatted-image"
            src={data.image}
          />

          <div className="d-block text-center">
              <h2 style={{color: "black"}}> {data.title} </h2>
              <h5> {data.name} </h5>
              <h6> {data.year} </h6>
          </div>
        </>
    )
}
