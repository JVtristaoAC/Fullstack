import './App.css'
import {useState} from 'react'

let initialState = [
  {
    id: '1',
    description: 'first description'
  },
  {
    id: '2',
    description: 'second description'
  },
]

function App() {
  const [activities, setActivities] = useState(initialState);

  function AddWorkItem(e) {
    e.preventDefault()
    
    const newActivity =  {
      id: document.getElementById('id').value,
      description: document.getElementById('description').value
    }

    setActivities([...activities, {...newActivity}])
  }

  return (
    <div className='mt-3'>
      <form>
        <input id='id' type="text" placeholder='id'/>
        <input id='description' type="text" placeholder='description'/>
        <button onClick={AddWorkItem}>Add work item</button>
      </form>

    <ul className='list-group'>
          {activities.map(activity => (<li key={activity.id} className='list-group-item'>{activity.id} - {activity.description}</li>))}
      </ul>

    </div>
      
  )
}

export default App
