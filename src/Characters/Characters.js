import React, { useState, useEffect } from "react";
import "./Characters.css";

function Characters () {

    const [characters, setCharacters] = useState()

    // acts as a componentDidUpdate
    useEffect( () => {
        console.log('componentDidUpdate')
        {fetchAPICharacters()}
    })

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'
  
    const fetchAPICharacters = () => {
        fetch(`https://www.potterapi.com/v1/characters${key}`)
        .then(res => res.json())
        .then(potter => {
            console.log('Characters Fetch', potter)
        })
    }

    return (
    <>
        <p>{fetchAPICharacters}</p>
    </>
    )
}

  
export default Characters;