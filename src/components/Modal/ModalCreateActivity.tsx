import React, { ChangeEvent, FunctionComponent, useContext, useState } from 'react';
import AppContext from '../AppContext';
import Modal from './Modal'; 

export interface ModalProps {
  handleClose: () => void,
  show: boolean,
}

const ModalCreateActivity: FunctionComponent<ModalProps> = ({handleClose, show}) => {

  const { activities, setActivities } = useContext(AppContext);
  const [ input, setInput ] = useState("");
  const [ emoji, setEmoji ] = useState("");

  let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  let handleChangeEmoji = (e: ChangeEvent<HTMLInputElement>) => {
    setEmoji(e.target.value);
  };

  let saveActivity = () => {
    if(input !== ""){
      setActivities(activities.concat({name: input, emoji: emoji}));
      setInput("");
      setEmoji("");
      handleClose();
    }
  }

  return (
    <div className="space centered">

      <Modal
        handleClose={handleClose}
        show={show}
        title="Agregar una actividad"
      >
        <>
          <input type="text" className="input-search" onChange={e => handleChange(e)} placeholder="Actividad" value={input} />
          <input type="text" className="input-search" onChange={e => handleChangeEmoji(e)} placeholder="Emoji" value={emoji} />
          <button className="style-button" onClick={saveActivity} type="submit">Agregar actividad</button>
        </>
      </Modal>

    </div>
  );

}


export default ModalCreateActivity
