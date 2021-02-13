import React from 'react';

function Form() {

   return (
       <form>
        <div className="form-group-inputs">
            <label>
                Name 
                <input 
                   type="text"
                   name="name"
                   placeholder="type a name"
                />
            </label> 
            <label>
                Email
                <input 
                    type="email"
                    name="email"
                    placeholder="type an email"
                />
            </label>
            <label>
                Role
                <select>
                    <option>Backend Engineer</option>
                    <option>Frontend Engineer</option> 
                    <option>Designer</option>
                    <option>Fullstack Developer</option>
                    <option>Mobile Application Developer</option>
                    <option>Game Developer</option>
                    <option>Data Scientist</option> 
                </select>
            </label>
            <input type="submit" />    
        </div>
       </form>
   ) 
}

export default Form;