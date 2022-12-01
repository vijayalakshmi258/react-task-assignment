import React    from "react";
import AddTask from "../add-task/add-task";
import TaskForm from "../task-form/task-form";
import TaskList from "../task-list/task-list";

export default class TaskContainer extends React.Component {
  state = {
    tasks: [],
    flag: false,
    addButtonDisplay: 'block'
  }

  UNSAFE_componentWillReceiveProps = (props) => this.setState({ tasks: props.tasks })

  handleTask = (task) => {
    let tasks = this.state.tasks
    let flag = false
    let addButtonDisplay = 'block'
    tasks.push(task)
    this.setState({
      tasks: tasks,
      flag: flag,
      addButtonDisplay: addButtonDisplay
    })
  }

  handleAddButton = (flag) => {
    let addButtonDisplay = 'none'
    this.setState({
      flag: flag,
      addButtonDisplay: addButtonDisplay
    })
  }
  render = () => (
    <div>
        <TaskList tasks={this.state.tasks} />
        <AddTask addButtonDisplay={this.state.addButtonDisplay} handleAddButton={this.handleAddButton}/>
        {this.state.flag === true && <TaskForm handleTask={this.handleTask}/> }
    </div>
  )
}

