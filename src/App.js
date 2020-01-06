import React from 'react';
import './App.css';

function App() {

  const fetchAPI = () => {
    fetch('https://www.potterapi.com/v1/houses?key=$2a$10$v1mBd78O90nZknSpD9943.fNzwPGQoyrIYTuhjXPPHBUQETkzNeNq')
    .then(res => res.json())
    .then(potter => {
      console.log('App API', potter)
    })
  }

  return (
    <>
      <button onClick={fetchAPI}>Fetch API</button>
    </>
  );
}

export default App;
