import React, { useState, useEffect } from "react";
import "./SortingHat.css";

function SortingHat () {

    const [sort, setSort] = useState([])

    useEffect( () => {
        fetchAPISortingHat()
    }, [])

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'

    const fetchAPISortingHat = () => {
        fetch(`https://www.potterapi.com/v1/sortingHat${key}`)
        .then(res => res.json())
        .then(potter => {          
            const sortedHouse = potter
            setSort(sortedHouse)
        })
    }

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