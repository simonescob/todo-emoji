import React, { useContext } from 'react';
import '../../assets/styles/listActivities.css';
import AppContext from '../AppContext';

export default function ListActivities() {

  const { activities, setActivities } = useContext(AppContext);

  const removeActivity = (id: number) => {
    let newListActivity = activities.filter((act, i) => i !== id);
    setActivities(newListActivity);
  }

  return(
    <div className="list list-width">
      <div className="list-title">
        <h3>Lista de actividades</h3>
      </div>
      {
        Array.isArray(activities) && activities.length > 0 ?
        activities.map((activity, i) => 
          <div key={i} className="list-item">
            {activity.name} - {activity.emoji} <button className="remove" onClick={() => removeActivity(i)}>X</button>
          </div>
        )
        : <h3>No hay actividades</h3>
      }
    </div>
  );
}