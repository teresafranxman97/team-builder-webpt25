import './App.css';
import React, { useState } from 'react';


import Form from './Components/Form';

const initialForm = {
  name: "",
  email: "",
  role: ""
}

function App() {
  const [ users, setUsers ] = useState([]);
  const [ form, setForm ] = useState(initialForm);      

  const submit = () => {
    setUsers({...users, form})
    setForm(initialForm)
  }

  const update = ( name, value ) => {
    setForm({...form, [name]: value})
  }
                                                                     
  return (
    <div className="App">
      <h1>Join The Team!</h1>

      <Form form={form} update={update} submit={submit} />
      {/* <div className="user-container">
        {users.map(user => {
          return (
            <div className="user-content">
              <h1> {user.name} </h1> 
              <p> {user.email} </p>
              <p> {user.role} </p>
            </div>
          )
        })}
      </div> */}
    </div>
  );
}

export default App;
