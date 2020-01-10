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
                <h1 className='house-title'>{houseDetails[0].name}</h1>
                <span>
                    <Link to='/houses' className='link-back'>
                        back to houses
                    </Link>
                </span>
            </header>
            <div className='house-box'>
                <img className='house-ties-img' src='/images/house_ties.jpg' alt='Hogwarts'></img>
                <div className='house-details'>
                    <h3 className='stats'>Stats:</h3>
                    <h4 className='bold'>House Founder:</h4>  <span>{houseDetails[0].founder}</span>
                    <br></br>
                    <h4 className='bold'>Head of House:</h4>  <span>{houseDetails[0].headOfHouse}</span>
                    <br></br>
                    <h4 className='bold'>House Ghost:</h4>   <span>{houseDetails[0].houseGhost}</span>
                    <br></br>
                    <h4 className='bold'>Mascot:</h4>   <span>{houseDetails[0].mascot}</span>
                    <br></br>
                    <div className="table-container">
                        <table align="center" className="table-values">
                            <thead>
                                <tr>
                                    <th>Values:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {houseDetails[0].values.map((item, key) => (
                                <tr key={key}>
                                    <td>{item}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        <table align="center" className="table-colors">
                            <thead>
                                <tr>
                                    <th>Colors:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {houseDetails[0].colors.map((item, key) => (
                                <tr key={key}>
                                    <td>{item}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default HouseDetails;