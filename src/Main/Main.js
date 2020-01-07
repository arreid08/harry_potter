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
                    <img className='mainImage' src='/images/Characters.jpg' alt='Characters'></img>
                </Link>
                <Link to='/houses' className='houseGrid'>
                    <img className='mainImage' src='/images/Houses.jpg' alt='Houses'></img>
                    <Houses />
                </Link>
                <Link to='/spells' className='spellGrid'>
                    <img className='mainImage' src='/images/Spells.jpg' alt='Spells'></img>
                    <Spells />
                </Link>
                <Link to='/sortingHat' className='sortingGrid'>
                    <img className='mainImage' src='/images/SortingHat.png' alt='sortinghat'></img>
                    <SortingHat />
                </Link>
            </div>
        </>
    )
}


export default Main;