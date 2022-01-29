import React, { ChangeEvent, useState, useContext } from 'react';
import '../../assets/styles/input.css';
import AppContext from '../AppContext';

export default function Inputs(){

  const { activities, setActivities } = useContext(AppContext);

  const [ input, setInput ] = useState("");

  let searchActivity = (): void => {
    console.log("lista de actividades", activities);
  };

  let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  let saveActivity = () => {
    if(input !== ""){
      setActivities(activities.concat({name: input, emoji: "😁"}));
      setInput("");
    }
  }

  return (
    <div className="centered space">
      
      <h2 className="">
        Todo Emojis
      </h2>

      <div className="input-search">
        <input type="text" onChange={e => handleChange(e)} placeholder="Buscar actividad" value={input} />
        <button className="style-button" onClick={() => searchActivity()} type="submit">Buscar</button>
      </div>

      <button className="style-button" onClick={saveActivity} type="submit">Agregar actividad</button>

    </div>
  );

}

