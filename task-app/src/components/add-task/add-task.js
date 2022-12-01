import React    from "react";
import './add-task.css';

export default class AddTask extends React.Component {
  render = () => {
    let handleAddButton = this.props.handleAddButton
    return(
      <div className="addDiv" style={{ display: this.props.addButtonDisplay }}>
        <button className="addButton" onClick={() => handleAddButton(true)}> +</button>
        <span>Add New Task</span>
      </div>
    )
  }
}

