import React, { useEffect } from "react";
import "./Spells.css";

function Spells () {

    // acts as a componentDidUpdate
    useEffect( () => {
        console.log('componentDidUpdate')
        {fetchAPISpells()}
    })

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'
  
    const fetchAPISpells = () => {
        fetch(`https://www.potterapi.com/v1/spells${key}`)
        .then(res => res.json())
        .then(potter => {
            console.log('Spells Fetch', potter)
        })
    }

    return (
    <>
        <p>{fetchAPISpells}</p>
    </>
    )
}

  
export default Spells;