import { combineReducers } from 'redux'
import sidebar from './sidebarReducer'
import todoHeader from './todoHeaderReducer'

export default combineReducers({
  categories: sidebar,
  todoCathegorie: todoHeader,
})
