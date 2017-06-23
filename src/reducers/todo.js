import { ADD_TODO, TOGGLE_TODO } from '../constants/Todo'

const getinitialState = (initData) => {
  return localStorage.getItem('todo') === 'undefined' ? initData : JSON.parse(localStorage.getItem('todo') || [])
}

export function todo(state = getinitialState([]), action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.payload.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case 'DELETE_TODO':
      return state.filter(item => 
          item.id !== action.payload.id
        )
    default:
      return state
  }
}