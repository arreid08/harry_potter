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
                <Link to='/characters' className='character-grid'>
                    <div className='container'>
                        <img className='main-image' src='/images/Characters.jpg' alt='Characters'></img>
                        <div className='centered'>Characters</div>
                    </div>
                </Link>
                <Link to='/houses' className='house-grid'>
                    <div className='container'>
                        <img className='main-image' src='/images/Houses.jpg' alt='Houses'></img>                        
                        <div className='centered'>Houses</div>
                    </div>
                </Link>
                <Link to='/spells' className='spell-grid'>
                    <div className='container'>
                        <img className='main-image' src='/images/Spells.jpg' alt='Spells'></img>                        
                        <div className='centered'>Spells</div>
                    </div>
                </Link>
                <Link to='/sortingHat' className='sorting-grid'>
                    <div className='container'>
                        <img className='main-image' src='/images/SortingHat.png' alt='sortinghat'></img>                        
                        <div className='centered'>Sorting Hat</div>
                    </div>
                </Link>
            </div>
        </>
    )
}


export default Main;