import './App.css'
import {useEffect, useState} from 'react'
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';

let initialState = [
  {
    id: '1',
    title: 'Title 1',
    description: 'Description 1',
    priority: '1'
  },
  {
    id: '2',
    title: 'Title 1',
    description: 'Description 2',
    priority: '1'
  },
]

function App() {
  const [index, setIndex] = useState(0);
  const [activities, setActivities] = useState(initialState);
  const [activity, setActivity] = useState({id: 0});

  useEffect(() => {
    activities.length <= 0 ? setIndex(1) 
     : setIndex(Math.max.apply(Math, activities.map((i) => i.id)) + 1)
  }, [activities])
  
  function addActivity(activ) {
      setActivities([...activities, {...activ, id: index}])
  }

  function cancelActivity() {
    setActivity({id: 0});
  }

  function updateActivity(activity) {
    setActivities(activities.map(item => item.id === activity.id ? activity : item ));
    setActivity({id: 0});
  }

  function deleteActivity(id) {
    setActivities(activities.filter(activity => activity.id !== id));
  }

  function getActivity(id) {
    const activity = activities.filter(activity => activity.id === id);

    setActivity(activity[0]);
  }

  return (
    <div className='mt-3'>
     <ActivityForm
     addActivity = {addActivity}
     updateActivity = {updateActivity}
     cancelActivity = {cancelActivity}
     selectActivity = {activity}
     activities = {activities}
     />

     <ActivityList 
     activities = {activities}
     deleteActivity = {deleteActivity}
     getActivity = {getActivity}/>
    </div>
  )
}

export default App
