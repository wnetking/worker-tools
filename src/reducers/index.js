import { combineReducers } from 'redux'
import convector from './convector'
import loger from './loger'
import {todo} from './todo'

export default combineReducers({
  convector,
  loger,
  todo
})