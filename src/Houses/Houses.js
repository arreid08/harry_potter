import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Houses.css";

function Houses () {

    const [houses, setHouses] = useState([])

    useEffect( () => {
        fetchAPIHouses()
    }, [])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'

    const fetchAPIHouses = () => {
        fetch(`https://www.potterapi.com/v1/houses${key}`)
        .then(res => res.json())
        .then(potter => {
            setHouses(potter)
        })
    }

    // create object for house pictures here.
    // filter the object to show the pictures with the houses.

   

    const houNames = houses.map(house => { 
        const houseId = house._id
        return(
            <div className='names' key={house._id}>
                <Link to={'/houses/' + house._id} house={houseId} className='housesLink'>
                    <p>{house.name}</p>
                </Link>
            </div>
        )
    })

    return (
        <>
            <header>
                <h1 className='title'>Houses</h1>
            </header>
            <div className='houseList'>
                {houNames}
            </div>
        </>
    )
}

  
export default Houses;