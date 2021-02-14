import React, { useEffect, useState } from 'react';

function Form(props) {
    const [ form, setForm ] = useState("")

   const handleSubmit = event => {
       event.preventDefault()
       console.log(event.target)
   }

   const handleChange = event => {
    // form.name = event.target.value; DO NOT DO THIS, NEVER MODIFY STATE DIRECTLY
    // console.log(event.target.value);
    // setForm({name: event.target.value}) THIS DOES NOT WORK EITHER
        setForm({...form, [event.target.name]: event.target.value});
   }

   

   return (
       <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-group-inputs">
            <label>
                Name 
                <input 
                   type="text"
                   name="name"
                   placeholder="type a name"
                   onChange={handleChange}
                />
            </label> 
            <label>
                Email
                <input 
                    type="email"
                    name="email"
                    placeholder="type an email"
                    onChange={handleChange}
                />
            </label>
            <label>
                Role
                <select name="role"  onChange={handleChange}>
                    <option>--Select A Role--</option>
                    <option>Backend Engineer</option>
                    <option>Frontend Engineer</option> 
                    <option>Designer</option>
                    <option>Fullstack Developer</option>
                    <option>Mobile Application Developer</option>
                    <option>Game Developer</option>
                    <option>Data Scientist</option> 
                </select>
            </label>
        </div>

        <div className="submit">
            <button>Submit</button>
        </div>
       </form>
   ) 
}

export default Form;