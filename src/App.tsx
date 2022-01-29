import React, { useState } from 'react';
import Inputs from './components/input/input';
import ListActivities from './components/list/ListActivities';
import './App.css';
import AppContext, { Activity } from './components/AppContext';

function App() {
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