import './App.css';
import React, { useState } from 'react';

import Form from './Components/Form';
import data from './data';


function App() {
  const [ users, setUsers ] = useState(data)
  
  return (
    <div className="App">
      Join The Team!
      <Form />
    </div>
  );
}

export default App;
