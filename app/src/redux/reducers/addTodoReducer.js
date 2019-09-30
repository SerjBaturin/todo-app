const addTodoReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { cathegorie, todo } = action.payload
      const todos = localStorage.getItem(cathegorie) + todo + '|'
      localStorage.setItem(cathegorie, todos)
      return null
    default:
      return state
  }
}

export default addTodoReducer
