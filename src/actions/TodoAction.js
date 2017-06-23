import { ADD_TODO, TOGGLE_TODO } from '../constants/Todo'

let nextTodoId = () => (
  Math.floor((Math.random() * 1000) + 1)
)
export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId(),
      text
    }
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    payload: {
      id
    }
  }
}