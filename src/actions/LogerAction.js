import { UPDATE_LOGERS, UPDATE_LOCAL_STORAGE } from '../constants/Loger'

export function updateLogers(logers) {
  return {
    type: UPDATE_LOGERS,
    payload: {
        logers: logers
    }
  }
}

export function updateLocalStorage(newData){
  localStorage.setItem('logers', JSON.stringify(newData));
  
  return{
    type: UPDATE_LOCAL_STORAGE
  }
}