import React, { ChangeEvent, useState, useContext } from 'react';
import '../../assets/styles/input.css';
import AppContext from '../AppContext';
// import { Container } from 'react-dom';

export default function Inputs(){

  const { activities, setActivities } = useContext(AppContext);

  const [ input, setInput ] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div className="">
      <h2 className="center">
        Todo Emojis
      </h2>
      <input type="text" onChange={e => handleChange(e)} placeholder="Buscar actividad" value={input} />
      <button 
        className="style-button" 
        color="blue" 
        onClick={() => searchActivity()} 
        type="submit">Buscar</button>

      <button className="style-button" onClick={saveActivity} type="submit">Agregar actividad</button>
    </div>
  );

}

