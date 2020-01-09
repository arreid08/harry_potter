import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HouseDetails.css";

function HouseDetails (props) {

    const [houseDetails, setHouseDetails] = useState([])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/houses/${props.match.params.house_id}${key}`)
        .then(res => res.json())
        .then(potter => {
            setHouseDetails(potter)
        })
    }, [props.match.params.house_id])

    if (houseDetails.length === 0) {
        return(
            <div>
                loading...
            </div>
        )
    }
    return (
        <>
            <header>
                <h1 className='title'>{houseDetails[0].name}</h1>
                <Link to='/houses' className='link-back'>
                    back to houses
                </Link>
            </header>
            <div className='house-box'>
                <img className='house-ties-img' src='/images/house_ties.jpg' alt='Hogwarts'></img>
                <div className='house-details'>
                    <h3>Stats:</h3>
                    <p>House Founder:  {houseDetails[0].founder}</p>
                    <p>Head of House:  {houseDetails[0].headOfHouse}</p>
                    <p>House Ghost:  {houseDetails[0].houseGhost}</p>
                    <p>Mascot:  {houseDetails[0].mascot}</p>
                    {/* <p>Members: {houseDetails[0].members}</p> */}
                    <p>Values:</p>
                    {houseDetails[0].values.map((value,key) => <p key={key}>{value}</p>)}
                    <p>Colors:</p>
                    {houseDetails[0].colors.map((color,key) => <p key={key}>{color}</p>)}
                </div>
            </div>
        </>
    )
}
  
export default HouseDetails;