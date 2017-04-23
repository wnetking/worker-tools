import { SET_ACTIVE } from '../constants/Menu'

export function setActive(active) {
  return {
    type: SET_ACTIVE,
    payload: {
        active: active
    }
  }

}