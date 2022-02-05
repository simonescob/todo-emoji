import React from 'react';

// type of activity
export type Activity = {
  name: string,
  emoji: string
}

// Type of context activity
export type ActivityContext = {
  activities: Activity[],
  setActivities: (act: Activity[]) => void
}

// AppContext
const AppContext = React.createContext<ActivityContext>({
  activities: [],
  setActivities: () => {}
});

export default AppContext;