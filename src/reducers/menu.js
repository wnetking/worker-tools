import { SET_ACTIVE } from '../constants/Menu'

const initialState = {
  active: 'Convector' 
}

export default function menu(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE:
      return { ...state, 
              active: action.payload.active}

    default:
      return state;
  }
}