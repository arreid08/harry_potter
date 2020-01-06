import React, { useEffect } from "react";
import "./SortingHat.css";

function SortingHat () {

    // acts as a componentDidUpdate
    useEffect( () => {
        console.log('componentDidUpdate')
        {fetchAPISortingHat()}
    })

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'

    const fetchAPISortingHat = () => {
        fetch(`https://www.potterapi.com/v1/sortingHat${key}`)
        .then(res => res.json())
        .then(potter => {
            console.log('Sorting Hat Fetch', potter)
        })
    }

    return (
    <>
        <p>{fetchAPISortingHat}</p>
    </>
    )
}

  
export default SortingHat;