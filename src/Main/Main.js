import React from "react";
import { Link } from "react-router-dom";
import Characters from '../Characters/Characters.js'
import Houses from '../Houses/Houses.js'
import Spells from '../Spells/Spells.js'
import SortingHat from '../SortingHat/SortingHat.js'
import "./Main.css";

function Main() {

    const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'
  
    const fetchAPICharacters = () => {
        fetch(`https://www.potterapi.com/v1/characters${key}`)
        .then(res => res.json())
        .then(potter => {
            console.log('Main API Characters', potter)
        })
    }

    const fetchAPIHouses = () => {
        fetch(`https://www.potterapi.com/v1/houses${key}`)
        .then(res => res.json())
        .then(potter => {
          console.log('Main API Houses', potter)
        })
    }

    const fetchAPISpells = () => {
        fetch(`https://www.potterapi.com/v1/spells${key}`)
        .then(res => res.json())
        .then(potter => {
            console.log('Main API Spells', potter)
        })
    }

    const fetchAPISorting = () => {
        fetch(`https://www.potterapi.com/v1/sortingHat${key}`)
        .then(res => res.json())
        .then(potter => {
            console.log('Main API Sorting Hat', potter)
        })
    }

    return (
        <>
            <div className='grid'>
                <Link to='/characters' onClick={fetchAPICharacters} className='characterGrid'>
                    <img></img>
                    <Characters />
                </Link>
                <Link to='/houses' onClick={fetchAPIHouses} className='houseGrid'>
                    <img></img>
                    <Houses />
                </Link>
                <Link to='/spells' onClick={fetchAPISpells} className='spellGrid'>
                    <img></img>
                    <Spells />
                </Link>
                <Link to='/sortingHat' onClick={fetchAPISorting} className='sortingGrid'>
                    <img></img>
                    <SortingHat />
                </Link>
            </div>
        </>
    )
}


export default Main;