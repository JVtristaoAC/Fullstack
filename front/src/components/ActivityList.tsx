import React from "react";
import Activity from "./Activity";

export default function ActivityList(prop) {
  return (
    <div className="mt-3">
      {prop.activities.map((activity) => (
        <Activity
          key={activity.id}
          activity={activity}
          deleteActivity={prop.deleteActivity}
          getActivity={prop.getActivity}
        />
      ))}
    </div>
  );
}
