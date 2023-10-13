import React from 'react';

import "./APIForm.css";

const APIForm = ({addGroup,addW,addA,url,weight,lifeSpan,group}) =>{
  return (
    <div className="card">
      <img className="im" src={url}/>
      <div className="buttons">
        <button className="group" onClick={addGroup}>Group: {group}</button>
        <button className="weight" onClick={addW}> {weight} </button>
        <button className="lifespan" onClick={addA}> {lifeSpan} </button>
      </div>
    </div>
    );
}


export default APIForm;