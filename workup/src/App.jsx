import './App.css'
import {useState} from 'react'

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

  function AddWorkItem(e) {
    e.preventDefault()
    
    const newActivity =  {
      id: document.getElementById('id').value,
      description: document.getElementById('description').value,
      title: document.getElementById('title').value,
      priority: document.getElementById('priority').value
    }

    setActivities([...activities, {...newActivity}])
  }

  function priorityLabel(param){
    switch(param){
      case '1':
        return 'Low';
      case '2':
        return 'Medium';
      case '3':
        return 'High';
      default:
        return 'Undefined';
    }
  }

    function priorityFace(param){
      switch(param){
        case '1':
          return 'smile';
        case '2':
          return 'meh';
        case '3':
          return 'frown';
        default:
          return 'Undefined';
      }
  }

  function priorityColor(param){
    switch(param){
      case '1':
        return 'success';
      case '2':
        return 'warning';
      case '3':
        return 'danger';
      default:
        return 'secondary';
    }
}
  return (
    <div className='mt-3'>
      <form className='row g-3'>
        <div className='col-md-6'>
          <label className="form-label">Id</label>
          <input type="text" className="form-control" id="id" disabled value={activities.length + 1}/>
        </div>

        <div className="col-md-4">
          <label className="form-label">Priority</label>
          <select id="priority" className="form-select">
            <option defaultValue="0">Choose...</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </div>

        <div className='col-md-6'>
          <label className="form-label">Title</label>
          <input type="text" className="form-control" id="title"/>
        </div>

        <div className='col-md-6'>
          <label className="form-label">Description</label>
          <input type="text" className="form-control" id="description"/>
        </div>

        <div className='col-12'>
          <button className="btn btn-outline-secondary Soutline mb-3" onClick={AddWorkItem}>+ Work item</button>
        </div>
      </form>
      
      <div className='mt-3'>
            {activities.map(activity => (
            <div key={activity.id} className={'card mb-2 shadow border-' + priorityColor(activity.priority)}>
              <div className='card-body'>
                <div className="d-flex justify-content-between">
                  <h5 className='card-title'>
                    <span className={'badge me-1 bg-' + priorityColor(activity.priority)}>
                      {activity.id}
                    </span> 
                      {activity.title}
                  </h5>
                  <h6>
                     Priority:
                     <span className={'ms-1 text-' + priorityColor(activity.priority)}>
                      <i className={'me-1 far fa-' + priorityFace(activity.priority)}></i>
                      {priorityLabel(activity.priority)}
                     </span>
                  </h6>
                </div>
                <p className='card-text'>
                  {activity.description}
                </p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                  <div className='btn btn-sm btn-outline-primary me-2'>
                  <i className='fas fa-pen me-2'/>
                    Edit
                  </div>
                  <div className='btn btn-sm btn-outline-danger'>
                    <i className='fas fa-trash me-2'/>
                    Delete
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
