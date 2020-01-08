import React, { useState, useEffect } from "react";
import "./SpellDetails.css";

function SpellDetails (props) {

    const [spellDetails, setSpellDetails] = useState([])

    useEffect( () => {
        console.log('SpellDetails did mount')
        fetchAPISpellDetails()
    }, [])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'

    const fetchAPISpellDetails = () => {
        fetch(`https://www.potterapi.com/v1/spells${key}&spell=${props.match.params.spell}`)
        .then(res => res.json())
        .then(potter => {
            setSpellDetails(potter)
        })
    }
   
    console.log('SpellDetails props', props)
    console.log('SpellDetails[0]', spellDetails[0])
    if (spellDetails.length === 0) {
        return(
            <div>
                loading...
            </div>
        )
    }
    return (
        <>
            <header>
                <h1 className='title'>{spellDetails[0].spell}</h1>
            </header>
            <div className='spellBox'>
                <img className='scrollImg' src='/images/scrolls.jpg' alt='Hogwarts'></img>
                <div className='spellDetails'>
                    <h3>Stats:</h3>
                    <p>{spellDetails[0].effect}</p>
                    <p>{spellDetails[0].type}</p>
                </div>
            </div>
        </>
    )
}

  
export default SpellDetails;