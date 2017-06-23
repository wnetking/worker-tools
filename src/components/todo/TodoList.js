import React from 'react'
import Todo from './Todo'

let TodoList = (props) => (
  <div className='list-group offset-bottom'>
    {props.todo.map(item => {
      return <Todo key={item.id} id={item.id} completed={item.completed} onClick={props.onClick} deleteTodo={props.deleteTodo}>
        {item.text}
      </Todo>
    })}
  </div>
)

export default TodoList