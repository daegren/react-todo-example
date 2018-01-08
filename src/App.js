import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import NewTodo from './NewTodo';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          title: 'Get some groceries, or else you\'ll starve',
          completed: false
        },
        {
          title: 'Get a job',
          completed: false
        },
        {
          title: 'Go to class',
          completed: true
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Just do it!</h1>
        <NewTodo createTodo={this.createTodo} />
        <TodoList todos={this.state.todos} completeTodo={this.completeTodo} />
      </div>
    );
  }

  completeTodo = (i, completed) => {
    const todos = this.state.todos.map((t, idx) => {
      if (i === idx) {
        return Object.assign(t, {completed})
      } else {
        return t
      }
    })

    this.setState({todos})
  }

  createTodo = (title) => {
    const newTodo = {
      title,
      completed: false
    }

    const newTodos = this.state.todos.concat(newTodo)

    this.setState({
      todos: newTodos
    })
  }
}

export default App;
