import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

const Update = () => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(()=>{
        getData();
    },[])   

    const getData = async ()=>{
        const nrmlData = await fetch(`http://localhost:5000/${id}`);
        const jsonData = await nrmlData.json();
        setName(jsonData.name);
        setEmail(jsonData.email);
        setAge(jsonData.age);
    }

    const tgl = ()=>{
        done ? setDone(false)  :setDone(true);
      }

    const putData = async (e)=>{
        e.preventDefault();
        const updatedData = {name,email,age};
        const response = await fetch(`http://localhost:5000/${id}`, {
            method : "PATCH",
            body : JSON.stringify(updatedData),
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
            tgl();
            console.log(result.error);
          }
    }

  return (
    <>
    <div className="create-container">
    {
        done ? <div className="formSubmit">Your form has been <b>successfully Updated</b>! Thank you!</div> : <></>
      }
    <h2 className="create-title">Update User</h2>
    <form className="create-form" onSubmit={putData}>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name"  value={name} onChange={(e)=>{setName(e.target.value)}} />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="number" name="age" min={0} max={100}  value={age} onChange={(e)=>{setAge(e.target.value)}}/>
      </div>

      <button type="submit" className="create-submit">Submit</button>

    </form>
  </div>
  </>
  )
}

export default Update
