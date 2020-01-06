import React from "react";
import { Link } from "react-router-dom";
import Characters from '../Characters/Characters.js'
import Houses from '../Houses/Houses.js'
import Spells from '../Spells/Spells.js'
import SortingHat from '../SortingHat/SortingHat.js'
import "./Main.css";

function Main() {

    return (
        <>
            <div className='grid'>
                <Link to='/characters' className='characterGrid'>
                    <img src='/images/Characters.jpg' alt='Characters'></img>
                    <Characters />
                </Link>
                <Link to='/houses' className='houseGrid'>
                    <img src='/images/Houses.jpg' alt='Houses'></img>
                    <Houses />
                </Link>
                <Link to='/spells' className='spellGrid'>
                    <img src='/images/Spells.jpg' alt='Spells'></img>
                    <Spells />
                </Link>
                <Link to='/sortingHat' className='sortingGrid'>
                    <img src='/images/SortingHat.jpg' alt='sortinghat'></img>
                    <SortingHat />
                </Link>
            </div>
        </>
    )
}


export default Main;