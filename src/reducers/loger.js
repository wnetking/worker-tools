import {UPDATE_LOGERS} from '../constants/Loger'

const initialState = {
  logers: [
    {date: '12.04.17', content: 'пил чай'},
    {date: '12.04.17', content: 'пил чай'}
  ]
}

export default function loger(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOGERS:
      return {
        ...state,
        logers: action.payload.logers
      }

    default:
      return state;
  }
}