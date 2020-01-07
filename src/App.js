import React from 'react';
import './App.css';
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Characters from './Characters/Characters.js'
import Houses from './Houses/Houses.js'
import Spells from './Spells/Spells.js'
import SortingHat from './SortingHat/SortingHat.js'
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {

  return (
    <>
      <Route path='/' render={() => <Redirect to='/home' />} />
      <Header />
      {/* <button onClick={fetchAPI}>Fetch API</button> */}
      <Switch>
          <Route 
            path='/home' 
            render={() => <Main />}
          />
          <Route 
            path='/characters'
            render={() => <Characters />} 
          />
          <Route 
            path='/houses'
            render={() => <Houses />} 
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
