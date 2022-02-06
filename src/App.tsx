import React, { useState } from 'react';
import Inputs from './components/input/input';
import ListActivities from './components/list/ListActivities';
import './assets/styles/App.css';
import AppContext, { Activity } from './components/AppContext';

function App() {

  // initial state and setState of context activity
  const [ activities, setActivities ] = useState<Activity[]>([]);

  return (
    <AppContext.Provider value={{activities, setActivities}}>
      <div className="App">
        <Inputs/>
        <ListActivities/>
      </div>
    </AppContext.Provider>
  );

}

export default App;
