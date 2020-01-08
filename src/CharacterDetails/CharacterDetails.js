import React, { useState, useEffect } from "react";
import "./CharacterDetails.css";

function CharacterDetails (props) {

    const [characterDetails, setCharacterDetails] = useState([])

    useEffect( () => {
        console.log('CharacterDetails did mount')
        fetchAPICharacterDetails()
    }, [])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'
    let newName = props.match.params.character.replace(' ','%20')
  
    console.log(`https://www.potterapi.com/v1/characters${key}&name=${newName}`)

    const fetchAPICharacterDetails = () => {
        fetch(`https://www.potterapi.com/v1/characters${key}&name=${newName}`)
        .then(res => res.json())
        .then(potter => {
            setCharacterDetails(potter)
        })
    }
   
    console.log('CharacterDetails props', props)
    console.log('CharacterDetails', characterDetails)
    console.log('characterDetails[0]', characterDetails[0])
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
            </header>
            <div className='charactersBox'>
                <img className='hogwartsImg' src='/images/Hogwarts.jpg' alt='Hogwarts'></img>
                <div className='charsDetails'>
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