import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import '../../assets/styles/input.css';
import { Activity } from '../AppContext';
import AppContext from '../AppContext';
import ModalCreateActivity from '../Modal/ModalCreateActivity'; 

export default function Inputs(){

  const { setActivities } = useContext(AppContext);
  const [ input, setInput ] = useState("");
  const [ modalOpen, setOpenModal ] = useState(false);

  const searchActivities = JSON.parse(sessionStorage.getItem("activities") || '{}');
  const search = searchActivities.filter((activity: Activity) => activity.name.includes(input) || activity.emoji.includes(input) );

  let searchActivity = (): void => {
    setActivities(search);
  };

  let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setActivities(search);
  }, [input === ""])

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

