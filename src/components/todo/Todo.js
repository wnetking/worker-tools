import React from 'react'

let Todo = (props) => (
  <a key={props.id} className={`list-group-item ${props.completed ? 'list-group-item-success' : ''}`}
    onClick={() => props.onClick(props.id)}>
    <span style={{ float: 'right', cursor: 'pointer' }} onClick={() => props.deleteTodo(props.id)}>x</span>
    {props.children}
  </a>
)

export default Todo