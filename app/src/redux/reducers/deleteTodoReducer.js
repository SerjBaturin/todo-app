const deleteTodoReducer = (state = '', action) => {
  switch (action.type) {
    case 'DELETE_TODO':
      const {cathegorie, todo} = action.payload
      const todoArray = localStorage.getItem(cathegorie).slice(0, -1).split('|')
      todoArray.splice(todoArray.indexOf(todo), 1)
      localStorage.setItem(cathegorie, todoArray.join('|') + '|')
      return null
    default:
      return state
  }
}

export default deleteTodoReducer
