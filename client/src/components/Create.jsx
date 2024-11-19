import React, { useState } from 'react';
import '../styles/create.css';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [done, setDone] = useState(false);

  const putData = async (e)=>{
    e.preventDefault();
    const userData = {name,email,age};
    const response = await fetch("http://localhost:5000",{
      method : "POST",
      body : JSON.stringify(userData),
      headers :{
        "Content-Type" : "application/json",
      }
    });

    const result = await response.json();
    console.log(response);
    if(!response.ok){
      console.log(result);
      setName("")
      setEmail("")
      setAge(0)
      tgl();
      
    }

    //false
    if(response.ok){
      console.log(result.error);
    }
  }

  const tgl = ()=>{
    done ? setDone(false)  :setDone(true);
  }

  

  return (
    <div className="create-container">
      {
        done ? <div className="formSubmit">Your form has been <b>successfully submitted</b>! Thank you!</div> : <></>
      }
      <h2 className="create-title">Create User</h2>
      <form className="create-form"  onSubmit={putData}>

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

        <button type="submit" className="create-submit">Submit</button>

      </form>
    </div>
    
  );
};

export default Create;
