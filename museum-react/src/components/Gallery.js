import React, { useEffect, useState } from 'react'
import Painting from './Painting'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

export default function Gallery() {

    let [pictures, setPictures] = useState([]);

    useEffect(() => {
        console.log("hello")
        async function fetchPictures() {    
            setPictures((await axios.get("http://localhost:8001/paintings")).data);
        }

        fetchPictures();
        console.log("done")
    }, [])

    console.log(pictures)
    let items = pictures.map(picture => {
        return <Carousel.Item>
                <Painting  key={picture.id} data={picture}/>
            </Carousel.Item>
    })

    return (
        <Carousel variant="dark" indicators={false}>
            {items}
        </Carousel>
    )
}
