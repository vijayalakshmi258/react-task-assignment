import React from 'react';
import Tasks from '../../objects/Tasks';
import './task-form.css';

export default class TaskForm extends React.Component {
  render() {
    let handleTask = this.props.handleTask
    return (
      <>
      <div className="App-header newtask">New Task</div>
    <div className='task-form'>
      
        <div className='titleDiv'>
          What is to be done?
          <div><input className="input" type="text" id="title" placeholder='What is to be done?'></input></div>
        </div>
         
        <div className='titleDiv'>
          Due Date
          <div>
            <input className="input" type="date" id="dueDate" placeholder='Due Date'></input><br/>
            <input className="input" type="time" id="dueTime" placeholder='time'></input><br/>
          </div>
        </div>

        <div className='titleDiv'>Repeat
        <div>
          <select className="select" name="repeat" multiple>
            <option value="" disabled>---Choose---</option>
            <option value="Once a Month">Once a Month</option>
            <option value="Everyday">Everyday</option>
          </select>
        </div>
        </div>

        <div className='titleDiv'>Add to List
        <div>
          <select className="select" name="addtolist" multiple>
            <option value="" disabled>---Choose---</option>
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
          </select>
        </div>
        </div>
        
        <button className='addTask' onClick={() => {
          let title = document.getElementById("title").value
          let dueDate = document.getElementById("dueDate").value
          let dueTime = document.getElementById("dueTime").value
          let newTask = new Tasks(title, dueDate, dueTime)
          handleTask(newTask)
          document.getElementById("title").value = ''
          document.getElementById("dueDate").value = ''
          document.getElementById("dueTime").value = ''
        }}>Add Task</button>
    </div>
    </>
)
}
}