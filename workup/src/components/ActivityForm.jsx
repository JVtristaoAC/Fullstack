export default function ActivityForm(prop) {
  return (
    <div>
       <form className='row g-3'>
        <div className='col-md-6'>
          <label className="form-label">Id</label>
          <input type="text" className="form-control" id="id" disabled value={prop.activities.length + 1}/>
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
          <button className="btn btn-outline-secondary Soutline mb-3" onClick={prop.AddActivity}>+ Work item</button>
        </div>
      </form>
    </div>
  )
}
