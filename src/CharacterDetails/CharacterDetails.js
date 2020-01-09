import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CharacterDetails.css";

function CharacterDetails (props) {

    const [characterDetails, setCharacterDetails] = useState([])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'
    let newName = props.match.params.character.replace(' ','%20')

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/characters${key}&name=${newName}`)
        .then(res => res.json())
        .then(potter => {
            setCharacterDetails(potter)
        })
    }, [])

    if (characterDetails.length === 0) {
        return(
            <div>
                loading...
            </div>
        )
    }
    return (
        <>
            <header>
                <h1 className='title'>{characterDetails[0].name}</h1>
                <Link to='/characters' className='link-back'>
                    back to characters
                </Link>
            </header>
            <div className='characters-box'>
                <img className='hogwarts-img' src='/images/Hogwarts.jpg' alt='Hogwarts'></img>
                <div className='chars-details'>
                    <h3>Stats:</h3>
                    <p>{characterDetails[0].school}</p>
                    <p>{characterDetails[0].house}</p>
                    <p>{characterDetails[0].role}</p>
                    <p>{characterDetails[0].bloodStatus}</p>
                    <p>{characterDetails[0].species}</p>
                    <p>{characterDetails[0].deathEater}</p>
                    <p>{characterDetails[0].dumbledoresArmy}</p>
                    <p>{characterDetails[0].orderOfThePhoenix}</p>
                    <p>{characterDetails[0].ministryOfMagic}</p>
                </div>
            </div>
        </>
    )
}
  
export default CharacterDetails;