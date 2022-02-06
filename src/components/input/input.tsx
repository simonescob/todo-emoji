import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import '../../assets/styles/input.css';
import { Activity } from '../AppContext';
import AppContext from '../AppContext';
import ModalCreateActivity from '../Modal/ModalCreateActivity'; 


// input function 
export default function Inputs(){

  // function for change contexto
  const { setActivities } = useContext(AppContext);
  
  // search state
  const [ input, setInput ] = useState("");

  // open modal state
  const [ modalOpen, setOpenModal ] = useState(false);
  
  // variable get data from sessionStorage
  const searchActivities = JSON.parse(sessionStorage.getItem("activities") || '{}');
  
  // variable filter data from sessionStorage
  const search = searchActivities.filter((activity: Activity) => activity.name.includes(input) || activity.emoji.includes(input) );

  // function change context list about search
  let searchActivity = (): void => {
    setActivities(search);
  };
  
  // function change input value
  let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    if(e.target.value === ""){
      setActivities(searchActivities);
    }
  };

  return (
    <div className="space centered">

      <ModalCreateActivity
        handleClose={() => setOpenModal(false)}
        show={modalOpen}
      >
      </ModalCreateActivity>

      <div className="center title">
        Todo Emojis
      </div>
      <div className="search">
        <input type="text" className="input-search" onChange={e => handleChange(e)} placeholder="Buscar actividad" value={input} />
        <button 
          className="style-button" 
          color="blue" 
          onClick={() => searchActivity()} 
          type="submit">Buscar</button>
      </div>
      <button className="style-button" onClick={() => setOpenModal(true)} type="submit">Agregar actividad</button>
    </div>
  );

}

