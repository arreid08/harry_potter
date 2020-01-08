import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Characters.css";

function Characters () {

    const [characters, setCharacters] = useState([])

    useEffect( () => {
        fetchAPICharacters()
    }, [])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'
  
    const fetchAPICharacters = () => {
        fetch(`https://www.potterapi.com/v1/characters${key}`)
        .then(res => res.json())
        .then(potter => {
            setCharacters(potter)
        })
    }

    const charNames = characters.map(names => {
        return(
            <div className='names' key={names.name}>
                <Link to={'/characters/' + names.name} className='characterLink'>
                    {names.name}
                </Link>
            </div>
        )
    })

    return (
        <>
            <header>
                <h1 className='title'>Characters</h1>
            </header>
            <div className='charsList'>
                {charNames}
            </div>
        </>
    )
}

  
export default Characters;