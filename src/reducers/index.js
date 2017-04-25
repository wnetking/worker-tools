import { combineReducers } from 'redux'
import convector from './convector'
import menu from './menu'
import loger from './loger'

export default combineReducers({
  convector,
  menu,
  loger
})