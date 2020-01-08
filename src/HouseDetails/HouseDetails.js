import React, { useState, useEffect } from "react";
import "./HouseDetails.css";

function HouseDetails (props) {

    const [houseDetails, setHouseDetails] = useState([])

    useEffect( () => {
        console.log('HouseDetails did mount')
        fetchAPIHouseDetails()
    }, [])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'
  
    const fetchAPIHouseDetails = () => {
        fetch(`https://www.potterapi.com/v1/houses${key}`)
        .then(res => res.json())
        .then(potter => {
            setHouseDetails(potter)
        })
    }

    // console.log('houseDetails Props', props)
    console.log('houseDetails', houseDetails)
    // console.log('houseDetails[0]', houseDetails[0])

    if (houseDetails.length === 0) {
        return(
            <div>
                loading...
            </div>
        )
    }
        let currentId = props.match.params.house_id
        let currentHouse = houseDetails.find(d =>{
            return currentId === d.house_id
        })
        if (currentHouse) {
            return (
                <>
                    <header>
                        <h1 className='title'>{houseDetails[0].name}</h1>
                    </header>
                    <div className='houseBox'>
                        <img className='houseTiesImg' src='/images/house_ties.jpg' alt='Hogwarts'></img>
                        <div className='houseDetails'>
                            <h3>Stats:</h3>
                            <p>House Founder: {houseDetails[0].founder}</p>
                            <p>Head of House: {houseDetails[0].headOfHouse}</p>
                            <p>House Ghost: {houseDetails[0].houseGhost}</p>
                            <p>Mascot: {houseDetails[0].mascot}</p>
                            {/* <p>Members: {houseDetails[0].members}</p> */}
                            <p>Values: {houseDetails[0].values}</p>
                            <p>Colors: {houseDetails[0].colors}</p>
                        </div>
                    </div>
                </>
            )
        }
}
  
export default HouseDetails;