import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';

import Form from './Components/Form';
// import User from './Components/User';
// import User from './Components/User';

const Styles = styled.div `
  padding: 2em;

  h1 {
    font-size: 45px;
    color: navy;
  }
`

const initialForm = {
  name: "",
  email: "",
  role: ""
}

function App() {
  const [ users, setUsers ] = useState([
    { id: 0, name:'Jenny', email: 'jenny2@ex.com', role: 'Designer' },
    { id: 1, name: 'Robert', email: 'robot123@ex.com', role: 'Data Scientist' },
    { id: 2, name: 'Joe', email: 'joe@ex.com', role: 'Frontend Engineer' }
  ]);
  // console.log(users)

  const [ form, setForm ] = useState(initialForm);      

  const submit = () => {
    setUsers({...users, form})
    setForm(initialForm)
  }

  const update = ( name, value ) => {
    setForm({...form, [name]: value})
  }
                                                                     
  return (
    <Styles>
      <div className="App">
        <h1>Join The Team!</h1>
        <Form form={form} update={update} submit={submit} />
      </div>
    </Styles>
  );
}

export default App;
