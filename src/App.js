import React from 'react';
import './App.css';
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import { Route, Redirect } from 'react-router-dom'

function App() {

  const key = '?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq'
  
  const fetchAPI = () => {
    fetch(`https://www.potterapi.com/v1/houses${key}`)
    .then(res => res.json())
    .then(potter => {
      console.log('App API', potter)
    })
  }

  return (
    <>
      <Route path='/' render={() => <Redirect to='/home' />} />
      <Header />
      <button onClick={fetchAPI}>Fetch API</button>
      <Main />
    </>
  );
}

export default App;
