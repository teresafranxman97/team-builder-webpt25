import React from 'react';

function Form(props) {
    const { form, update, submit} = props
 
    //////////////// HANDLERS /////////////
   const handleSubmit = event => {
       event.preventDefault()
       submit()
   }

   const handleChange = event => {
        // setForm({...form, [event.target.name]: event.target.value})
        const {name, value} = event.target;
        update(name, value);
   }

   return (
       <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-group-inputs">
            <label>
                Name 
                <input 
                   type="text"
                   name="name"
                   value={form.name}
                   placeholder="type a name"
                   onChange={handleChange}
                />
            </label> 
            <label>
                Email
                <input 
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="type an email"
                    onChange={handleChange}
                />
            </label>
            <label>
                Role
                <select name="role"  onChange={handleChange} value={form.role} >
                    <option value="">--Select A Role--</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Frontend Engineer">Frontend Engineer</option> 
                    <option value="Designer">Designer</option>
                    <option value="Fullstack Developer">Fullstack Developer</option>
                    <option value="Mobile Application Developer">Mobile Application Developer</option>
                    <option value="Game Developer">Game Developer</option>
                    <option value="Data Scientist">Data Scientist</option> 
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

