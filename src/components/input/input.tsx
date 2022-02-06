import React, { ChangeEvent, useState } from 'react';
import '../../assets/styles/input.css';
// import AppContext from '../AppContext';
import ModalCreateActivity from '../Modal/ModalCreateActivity'; 

export default function Inputs(){

  // const { activities, setActivities } = useContext(AppContext);
  const [ input, setInput ] = useState("");

  const [ modalOpen, setOpenModal ] = useState(false);

  let searchActivity = (): void => {
    // console.log("lista de actividades", activities);
  };

  let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="space centered">

      <ModalCreateActivity
        handleClose={() => setOpenModal(false)}
        show={modalOpen}
      >
      </ModalCreateActivity>

      <h2 className="center">
        Todo Emojis
      </h2>
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

