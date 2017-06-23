import { UPDATE_LOGERS } from '../constants/Loger'
import { logerData } from '../data/initData'

const getinitialState = (initData) => {
  return {
    logers: localStorage.getItem('logers') === 'undefined' || localStorage.getItem('logers') === null ?
      initData : JSON.parse(localStorage.getItem('logers'))
  }
}

export default function loger(state = getinitialState(logerData), action) {
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