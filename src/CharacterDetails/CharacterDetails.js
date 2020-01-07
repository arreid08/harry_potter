import React, { useState, useEffect } from "react";
import "./CharacterDetails.css";

function CharacterDetails (props) {

    const [characterDetails, setCharacterDetails] = useState([])

    useEffect( () => {
        fetchAPICharacterDetails()
    }, [])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'
    let newName = props.match.params.character.replace(' ','%20')
  
    console.log(`https://www.potterapi.com/v1/characters${key}&name=${newName}`)

    const fetchAPICharacterDetails = () => {
        fetch(`https://www.potterapi.com/v1/characters${key}&name=${newName}`)
        .then(res => res.json())
        .then(potter => {
            const characterDetails = potter
            // console.log('CharacterDetails Fetch', potter)
            setCharacterDetails(characterDetails)
        })
    }


    console.log('CharacterDetails', characterDetails)
    console.log('characterDetails[0]', characterDetails[0])

    return (
        <>
            <header>
                <h1 className='title'>Name Here</h1>
            </header>
            <div className='charsList'>  
                {/* {characterDetails.school} */}
                {/* {characterDetails.house} */}
                {/* {characterDetails.role} */}
                {/* {characterDetails.bloodStatus} */}
                {/* {characterDetails.species} */}
                {/* {characterDetails.deathEater} */}
                {/* {characterDetails.dumbledoresArmy} */}
                {/* {characterDetails.orderOfThePhoenix} */}
                {/* {characterDetails.ministryOfMagic} */}
            </div>
        </>
    )
}

  
export default CharacterDetails;