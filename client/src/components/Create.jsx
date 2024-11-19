import React, { useState } from 'react';
import '../styles/create.css';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const putData = async ()=>{
    const {name,email,age} = fetch("http://localhost:3000",{
      method : "POST",
      
      headers : {
        
      }
    })
  }

  {
    console.log(name);
    console.log(email);
    console.log(age);
  }

  return (
    <div className="create-container">
      <h2 className="create-title">Create User</h2>
      <form className="create-form">

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter your name" value={name} onChange={(e)=>{setName(e.target.value)}} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" name="age" min={0} max={100} placeholder="Enter your age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        </div>

        <button type="submit" className="create-submit" onSubmit={putData}>Submit</button>

      </form>
    </div>
    
  );
};

export default Create;
