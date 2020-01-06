import React, { useEffect } from "react";
import "./Houses.css";

function Houses () {

    // acts as a componentDidUpdate
    useEffect( () => {
        console.log('componentDidUpdate')
        {fetchAPIHouses()}
    })

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'

    const fetchAPIHouses = () => {
        fetch(`https://www.potterapi.com/v1/houses${key}`)
        .then(res => res.json())
        .then(potter => {
          console.log('Houses Fetch', potter)
        })
    }

    return (
    <>
        <p>{fetchAPIHouses}</p>
    </>
    )
}

  
export default Houses;