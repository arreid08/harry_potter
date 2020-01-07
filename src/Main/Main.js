import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";

function Main() {

    return (
        <>
            <header>
                <p className='intro'>Explore the world of Harry Potter.  Learn about the different characters, houses and even spells.  Also, take a chance with the sorting hat to see which house you'd be in if you were at Hogwarts!</p>
            </header>
            <div className='grid'>
                <Link to='/characters' className='characterGrid'>
                    <div className='container'>
                        <img className='mainImage' src='/images/Characters.jpg' alt='Characters'></img>
                        <div className='centered'>Characters</div>
                    </div>
                </Link>
                <Link to='/houses' className='houseGrid'>
                    <div className='container'>
                        <img className='mainImage' src='/images/Houses.jpg' alt='Houses'></img>                        
                        <div className='centered'>Houses</div>
                    </div>
                </Link>
                <Link to='/spells' className='spellGrid'>
                    <div className='container'>
                        <img className='mainImage' src='/images/Spells.jpg' alt='Spells'></img>                        
                        <div className='centered'>Spells</div>
                    </div>
                </Link>
                <Link to='/sortingHat' className='sortingGrid'>
                    <div className='container'>
                        <img className='mainImage' src='/images/SortingHat.png' alt='sortinghat'></img>                        
                        <div className='centered'>Sorting Hat</div>
                    </div>
                </Link>
            </div>
        </>
    )
}


export default Main;