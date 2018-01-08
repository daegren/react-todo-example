import React, { Component } from 'react'
import TodoListItem from './TodoListItem'

class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>Todos</h2>
        { this.props.todos.map((t, i) => <TodoListItem key={i} todo={t} completeTodo={this.completeTodo(i)} />) }
      </div>
    )
  }

  completeTodo = (i) => (checked) => {
    this.props.completeTodo(i, checked)
  }

}

export default TodoList
