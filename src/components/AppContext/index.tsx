import React from 'react';

export type Activity = {
  name: string,
  emoji: string
}

export type ActivityContext = {
  activities: Activity[],
  setActivities: (act: Activity[]) => void
}

const AppContext = React.createContext<ActivityContext>({
  activities: [],
  setActivities: () => {}
});

export default AppContext;