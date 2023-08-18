import React from "react";
import Activity from "./Activity";

export default function ActivityList(prop) {
  return (
    <div className="mt-3">
      {prop.activities.map((activity) => (
        <Activity
          key={activity.id}
          activity={activity}
          handleActivityModal={prop.handleActivityModal}
          handleConfirmModal={prop.handleConfirmModal}
          getActivity={prop.getActivity}
          selectActivity={activity}
        />
      ))}
    </div>
  );
}
