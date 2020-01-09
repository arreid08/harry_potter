import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Spells.css";

function Spells () {

    const [spells, setCharacters] = useState([])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/spells${key}`)
        .then(res => res.json())
        .then(potter => {
            const spellNames = potter
            console.log('Spell Fetch', potter)
            setCharacters(spellNames)
        })
    }, [])

    const spellNames = spells.map(names => {
        return(
            <div className='spellContainer'>
                <div className='names' key={names.spell}>
                    {names.spell}
                </div>
                <div>
                    <p className='spellType' key={names.type}>{names.type}</p>
                    <p className='spellEffect' key={names.effect}>{names.effect}</p>    
                </div>
            </div>
        )
    })
    return (
        <>
            <header>
                <h1 className='title'>Spells</h1>
            </header>
            <div className='spellsList'>
                {spellNames}
            </div>
        </>
    )
}
  
export default Spells;