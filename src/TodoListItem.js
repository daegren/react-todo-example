import React, { Component } from 'react'

class TodoListItem extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.todo.completed} onChange={this.handleChecked} />
        <span>{this.props.todo.title}</span>
      </div>
    )
  }

  handleChecked = (e) => {
    this.props.completeTodo(e.target.checked)
  }
}

export default TodoListItem
