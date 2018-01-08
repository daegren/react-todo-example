import React, { Component } from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      errors: ""
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.title} onChange={this.handleChange} />
        <button onClick={this.createTodo}>+</button>
        <span>{this.state.errors}</span>
      </div>
    )
  }

  createTodo = () => {
    this.props.createTodo(this.state.title)

    this.setState({
      title: ''
    })
  }

  handleChange = (e) => {
    const title = e.target.value

    let errors = ""
    if (title.length == 0) {
      errors = "Please enter a todo"
    }

    this.setState({title, errors})
  }
}

export default NewTodo
