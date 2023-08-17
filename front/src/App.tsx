import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import api from "./api/workup";

function App() {
  const [activities, setActivities] = useState([] as any);
  const [activity] = useState({ id: 0 });

  useEffect(() => {
    const getAllActivities = async () => {
      const allActivities = await getActivities();
      if (allActivities) setActivities(allActivities);
    };
    getAllActivities();
  }, []);

  const getActivities = async () => {
    const response = await api.get("Activity");
    return response.data;
  };

  const getActivity = async (id) => {
    const response = await api.get("Activity/" + id);
    return response.data;
  };

  const addActivity = async (activ) => {
    const response = await api.post("Activity", activ);

    setActivities([...activities, response.data]);
  };

  return (
    <div className="mt-3">
      <ActivityForm
        addActivity={addActivity}
        updateActivity={() => {}}
        cancelActivity={() => {}}
        selectActivity={activity}
        activities={activities}
      />

      <ActivityList
        activities={activities}
        deleteActivity={() => {}}
        getActivity={getActivity}
      />
    </div>
  );
}

export default App;
