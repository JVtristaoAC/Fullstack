import React from "react";
import { priority } from "../enum/priority";

export default function activity(prop) {
  function priorityFace(param) {
    switch (param) {
      case priority.Low:
        return "smile";
      case priority.Medium:
        return "meh";
      case priority.High:
        return "frown";
      default:
        return "Undefined";
    }
  }

  function priorityColor(param) {
    switch (param) {
      case priority.Low:
        return "success";
      case priority.Medium:
        return "warning";
      case priority.High:
        return "danger";
      default:
        return "secondary";
    }
  }
  return (
    <div
      className={
        "card mb-2 shadow border-" + priorityColor(prop.activity.priority)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span
              className={
                "badge me-1 bg-" + priorityColor(prop.activity.priority)
              }
            >
              {prop.activity.id}
            </span>
            {prop.activity.title}
          </h5>
          <h6>
            Priority:
            <span
              className={"ms-1 text-" + priorityColor(prop.activity.priority)}
            >
              <i
                className={
                  "me-1 far fa-" + priorityFace(prop.activity.priority)
                }
              ></i>
              {priority[prop.activity.priority]}
            </span>
          </h6>
        </div>
        <p className="card-text">{prop.activity.description}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            onClick={() => prop.getActivity(prop.activity.id)}
            className="btn btn-sm btn-outline-primary me-2"
          >
            <i className="fas fa-pen me-2" />
            Edit
          </button>
          <button
            onClick={() => prop.deleteActivity(prop.activity.id)}
            className="btn btn-sm btn-outline-danger"
          >
            <i className="fas fa-trash me-2" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
