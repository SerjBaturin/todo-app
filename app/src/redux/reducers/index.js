import { combineReducers } from 'redux'
import cathegories from './addCathegorieReducer'
import deleteAllData from './deleteAllDataReducer'
import showData from './showDataReducer'
import addTodo from './addTodoReducer'
import deleteCathegorie from './deleteCathegorieReducer'
import deleteTodo from './deleteTodoReducer'

export default combineReducers({
  cathegories,
  showData,
  addTodo,
  deleteTodo,
  deleteCathegorie,
  deleteAllData,
})
