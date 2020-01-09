import React, { useState, useEffect } from "react";
import "./Spells.css";

function Spells () {

    const [spells, setCharacters] = useState([])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/spells${key}`)
        .then(res => res.json())
        .then(potter => {
            const spellNames = potter
            setCharacters(spellNames)
        })
    }, [])

    const spellNames = spells.map(names => {
        return(
            <div className='spell-container' key={names._id}>
                <div className='names'>
                    {names.spell}
                </div>
                <div>
                    <p className='spell-type'>{names.type}</p>
                    <p className='spell-effect'>{names.effect}</p>    
                </div>
            </div>
        )
    })
    return (
        <>
            <header>
                <h1 className='title'>Spells</h1>
            </header>
            <div className='spells-list'>
                {spellNames}
            </div>
        </>
    )
}
  
export default Spells;