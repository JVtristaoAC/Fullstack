import './App.css'
import {useState} from 'react'
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
  const [activities, setActivities] = useState(initialState);

  function AddActivity(e) {
    e.preventDefault()
    
    const newActivity =  {
      id: document.getElementById('id').value,
      description: document.getElementById('description').value,
      title: document.getElementById('title').value,
      priority: document.getElementById('priority').value
    }

    setActivities([...activities, {...newActivity}])
  }

  function DeleteActivity(id) {
    setActivities(activities.filter(activity => activity.id !== id));
  }
  return (
    <div className='mt-3'>
     <ActivityForm
     AddActivity={AddActivity}
     activities = {activities}/>

     <ActivityList 
     activities = {activities}
     DeleteActivity = {DeleteActivity}/>
    </div>
  )
}

export default App
