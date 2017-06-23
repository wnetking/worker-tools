import React, { Component } from 'react'
import AddToDo from '../../components/todo/AddToDo'
import TodoList from '../../components/todo/TodoList'
import Footer from '../../components/todo/Footer'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VISIBILITY_FILTER: 'SHOW_ALL'
    }

    this.setVisibilityFilterType = this.setVisibilityFilterType.bind(this)
    this.filterTodo = this.filterTodo.bind(this)
  }

  setVisibilityFilterType(type) {
    this.setState({ VISIBILITY_FILTER: type });
  }

  filterTodo() {
    switch (this.state.VISIBILITY_FILTER) {
      case 'SHOW_ALL':
        return this.props.todo
      case 'SHOW_COMPLETED':
        return this.props.todo.filter((item) => {
          return (item.completed === true)
        })
      case 'SHOW_ACTIVE':
        return this.props.todo.filter((item) => {
          return (item.completed === false)
        })
      default:
        return this.props.todo
    }
  }

  render() {
    return (
      <div>
        <AddToDo addTodo={this.props.addTodo} />
        <TodoList todo={this.filterTodo()} onClick={this.props.toggleTodo} deleteTodo={this.props.deleteTodo} />
        <Footer onClick={this.setVisibilityFilterType} />
      </div>
    )
  }
}

