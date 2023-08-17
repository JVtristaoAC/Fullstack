import React from "react";
import { useState, useEffect } from "react";
import { priority } from "../enum/priority";

const inicialActivity = {
  id: 0,
  title: "",
  priority: priority.Undefined,
  description: "",
};

export default function ActivityForm(prop) {
  const [activity, setActivity] = useState(actualActivity());

  useEffect(() => {
    if (prop.selectActivity.id !== 0) setActivity(prop.selectActivity);
  }, [prop.selectActivity]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setActivity({ ...activity, [name]: value });
  };

  function actualActivity() {
    if (prop.selectActivity.id !== 0) return prop.selectActivity;
    else return inicialActivity;
  }

  const cancelHandler = (e) => {
    e.preventDefault();
    prop.cancelActivity();
    setActivity(inicialActivity);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (prop.selectActivity.id !== 0 || prop.selectActivity.id == undefined)
      prop.updateActivity(activity);
    else prop.addActivity(activity);

    setActivity(inicialActivity);
  };

  return (
    <div>
      <h1>Activity {activity.id !== 0 ? activity.id : ""} </h1>
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            className="form-control"
            onChange={inputTextHandler}
            value={activity.title}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Priority</label>
          <select
            id="priority"
            name="priority"
            className="form-select"
            onChange={inputTextHandler}
            value={activity.priority}
          >
            <option defaultValue="0">Choose...</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </div>

        <div>
          <label className="form-label">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            onChange={inputTextHandler}
            value={activity.description}
          />
        </div>

        <div className="col-12">
          {activity.id === 0 || activity.id === undefined ? (
            <button
              className="btn btn-outline-secondary Soutline mb-3"
              type="submit"
            >
              + Work item
            </button>
          ) : (
            <>
              <button
                className="btn btn-outline-success Soutline me-2"
                type="submit"
              >
                Save
              </button>

              <button
                className="btn btn-outline-warning Soutline"
                onClick={cancelHandler}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
