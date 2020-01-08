import React from 'react';
import './App.css';
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Characters from './Characters/Characters.js'
import CharacterDetails from './CharacterDetails/CharacterDetails.js'
import Houses from './Houses/Houses.js'
import HouseDetails from './HouseDetails/HouseDetails.js'
import Spells from './Spells/Spells.js'
import SpellDetails from './SpellDetails/SpellDetails.js'
import SortingHat from './SortingHat/SortingHat.js'
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {

  return (
    <>
      <Route path='/' render={() => <Redirect to='/home' />} />
      <Header />
      <Switch>
          <Route 
            path='/home' 
            render={() => <Main />}
          />
          <Route 
            path='/characters/:character'
            render={(props) => <CharacterDetails {...props}/>} 
          />
          <Route 
            path='/characters'
            render={() => <Characters />} 
          />
          <Route 
            path='/houses/:house_id'
            render={(props) => props.houseDetails ? (<HouseDetails {...props}/>) : ( <div></div>)} 
          />
          <Route 
            path='/houses'
            render={() => <Houses />} 
          />
          <Route 
            path='/spells/:spell'
            render={(props) => <SpellDetails {...props}/>} 
          />
          <Route 
            path='/spells'
            render={() => <Spells />} 
          />
          <Route 
            path='/sortingHat'
            render={() => <SortingHat />} 
          />
      </Switch>
    </>
  );
}

export default App;
