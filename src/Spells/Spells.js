import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Spells.css";

function Spells () {

    const [spells, setCharacters] = useState([])

    useEffect( () => {
        fetchAPISpells()
    }, [])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'
  
    const fetchAPISpells = () => {
        fetch(`https://www.potterapi.com/v1/spells${key}`)
        .then(res => res.json())
        .then(potter => {
            const spellNames = potter
            console.log('Spell Fetch', potter)
            setCharacters(spellNames)
        })
    }

    const spellNames = spells.map(names => {
        return(
            <div className='names' key={names.spell}>
                <Link to={'/spells/' + names.spell} className='spellLink'>
                    {names.spell}
                </Link>
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