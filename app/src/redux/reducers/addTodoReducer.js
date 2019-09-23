const addTodoReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let str = action.payload.todo + '|'
      let allString = localStorage.getItem(action.payload.cathegorie) + str
      localStorage.setItem(action.payload.cathegorie, allString)
      return null
    default:
      return state
  }
}

export default addTodoReducer
