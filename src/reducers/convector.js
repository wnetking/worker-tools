import { SET_NUMBERS } from '../constants/Convector'

const initialState = {
  intIn1: 1920,
  intIn2: 600
}

export default function convector(state = initialState, action) {
  switch (action.type) {
    case SET_NUMBERS:
      return { ...state, 
              intIn1: action.payload.intIn1, 
              intIn2: action.payload.intIn2}

    default:
      return state;
  }
}