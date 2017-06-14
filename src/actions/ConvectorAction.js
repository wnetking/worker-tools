import { SET_NUMBERS } from '../constants/Convector'

export function setNumbers(intIn1, intIn2) {
  return {
    type: SET_NUMBERS,
    payload: {
        intIn1 : intIn1,
        intIn2 : intIn2
    }
  }

}