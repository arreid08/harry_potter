import React, { useState, useEffect } from "react";
import "./SortingHat.css";

function SortingHat () {

    const [sort, setSort] = useState([])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/sortingHat${key}`)
        .then(res => res.json())
        .then(potter => {
            setSort(potter)
        })
    }, [])

    return (
    <>
        <div className='organize'>
            <h1 className='sorted'>{sort}</h1>
            <p className='congrats'>Congratulations!!  You are now a member of the {sort} house!! </p>
        </div>
    </>
    )
}

export default SortingHat;