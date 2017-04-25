import { UPDATE_LOGERS } from '../constants/Loger'

export function updateLogers(logers) {
  return {
    type: UPDATE_LOGERS,
    payload: {
        logers: logers
    }
  }

}