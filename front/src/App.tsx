import React from "react";
import "./App.css";
import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import api from "./api/workup";

function App() {
  const [activityModalShow, setActivityModalShow] = useState(false);
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const [activities, setActivities] = useState([] as any);
  const [activity, setActivity] = useState({ id: 0 });

  const handleConfirmModalShow = () => {
    setConfirmModalShow(!confirmModalShow);
  };

  const handleActivityModalShow = () => {
    setActivityModalShow(!activityModalShow);
  };

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
    setActivity(response.data);
  };

  const deleteActivity = async (id) => {
    const response = await api.delete("Activity/" + id);
    setConfirmModalShow(false);
    setActivities(response.data);
  };

  const clear = () => {
    setActivity({ id: 0 });
    setActivityModalShow(false);
    setConfirmModalShow(false);
  };

  const addActivity = async (activ) => {
    const response = await api.post("Activity", {
      id: activ.id,
      title: activ.title,
      description: activ.description,
      priority: Number(activ.priority) as number,
    });

    setActivities([...activities, response.data]);
    setActivityModalShow(false);
  };

  const updateActivity = async (activ) => {
    const response = await api.put("Activity", {
      id: activ.id,
      title: activ.title,
      description: activ.description,
      priority: Number(activ.priority) as number,
    });

    setActivities(response.data);
    setActivityModalShow(false);
  };

  function ActivityModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Activity {activity.id !== 0 ? activity.id : ""}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ActivityForm
            addActivity={addActivity}
            updateActivity={updateActivity}
            cancelActivity={clear}
            selectActivity={activity}
            activities={activities}
          />
        </Modal.Body>
      </Modal>
    );
  }

  function ConfirmModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Activity {activity.id !== 0 ? activity.id : ""} ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            variant="outline-success"
            onClick={() => deleteActivity(activity.id)}
          >
            <i className="fas fa-check me-2"></i>
            Yes
          </Button>

          <Button variant="outline-danger" onClick={() => clear()}>
            <i className="fas fa-times me-2"></i>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-end mt-2 pb-3 border-bottom border-1">
        <h1 className="m-0 p-0">
          Activity {activity.id !== 0 ? activity.id : ""}{" "}
        </h1>
        <Button
          variant="outline-secondary"
          onClick={() => setActivityModalShow(true)}
        >
          <i className="fas fa-plus" />
        </Button>
      </div>

      <div className="mt-3">
        <ActivityList
          activities={activities}
          handleActivityModal={handleActivityModalShow}
          handleConfirmModal={handleConfirmModalShow}
          getActivity={getActivity}
          selectActivity={activity}
        />

        <ActivityModal show={activityModalShow} onHide={clear} />
        <ConfirmModal show={confirmModalShow} onHide={clear} />
      </div>
    </>
  );
}

export default App;
