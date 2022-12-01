import React from 'react';
import Task from '../task/task';
import './task-list.css';

export default class TaskList extends React.Component {
  state = {
    tasks: this.props.tasks
  }

  UNSAFE_componentWillReceiveProps = (props) => this.setState({ tasks: props.tasks })

  render() {
    return (
   <div>
    {this.state.tasks.map(task =>
              <Task
                key={task.id}
                id={task.id}
                task={task} />
            )}
   </div>
)
}
}