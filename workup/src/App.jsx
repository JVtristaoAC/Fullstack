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
    e.preventDefault();

    
    
    const newActivity =  {
      id: document.getElementById('id').value,
      description: document.getElementById('description').value,
      title: document.getElementById('title').value,
      priority: document.getElementById('priority').value
    }

    setActivities([...activities.filter(activity => activity.id !== document.getElementById('id').value), {...newActivity}].sort((a, b) => a.id - b.id))
  
    ClearValues();
  }

  function DeleteActivity(id) {
    setActivities(activities.filter(activity => activity.id !== id));
  }

  function GetActivity(id) {
    let Activity = activities.filter(activity => activity.id === id)[0];

    document.getElementById('id').value = Activity.id;
    document.getElementById('description').value = Activity.description;
    document.getElementById('title').value = Activity.title;
    document.getElementById('priority').value = Activity.priority;
  }

  function ClearValues(){
    document.getElementById('description').value = '',
    document.getElementById('title').value = '',
    document.getElementById('priority').value =''
  }

  return (
    <div className='mt-3'>
     <ActivityForm
     AddActivity={AddActivity}
     activities = {activities}/>

     <ActivityList 
     activities = {activities}
     DeleteActivity = {DeleteActivity}
     GetActivity = {GetActivity}/>
    </div>
  )
}

export default App
