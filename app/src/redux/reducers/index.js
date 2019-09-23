import { combineReducers } from 'redux'
import todoHeader from './todoHeaderReducer'
import addTodo from './addTodoReducer'
import addCathegorie from './addCathegorieReducer'
import deleteAllData from './deleteAllDataReducer'

export default combineReducers({
  todoCathegorie: todoHeader,
  todos: addTodo,
  cathegories: addCathegorie,
  deleteAllData,
})
