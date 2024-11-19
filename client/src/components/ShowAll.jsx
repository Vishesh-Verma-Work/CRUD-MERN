import React, { useEffect, useState } from "react";
import "../styles/showAll.css";
import { NavLink } from "react-router-dom";

const ShowAll = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    getData();
    console.log("useEffect called")
  },[])

  const getData = async ()=>{
    const nrmlData = await fetch("http://localhost:5000/all");
    const jsonData = await nrmlData.json();
    setData(jsonData);
  }

  const deleteID = async (id)=>{
    const res = await fetch(`http://localhost:5000/${id}`,{
      method : "DELETE"
    });
    
    const resJson = await res.json();

    if(!res.ok){
      console.log(res.error);
    }
    if(res.ok){
      getData();
    }

  }

  return (
    <>
    <div className="container">
      {
        data?.map((info)=>(
    <div className="card" key={info._id}>
      <div className="card__info">
        <h3 className="card__name">{info.name}</h3>
        <p className="card__email">Email: {info.email}</p>
        <p className="card__email">ID: {info._id}</p>
        <p className="card__age">Age: {info.age}</p>
      </div>
      <div className="card__actions">
        
        <NavLink to={`/${info._id}`}><button className="card__btn card__btn--update">Update</button></NavLink>
        <button className="card__btn card__btn--delete" onClick={() => deleteID(info._id)} > Delete </button>
      </div>
    </div>
        ))
      }
    
    

    </div>
    </>
  );
};

export default ShowAll;
