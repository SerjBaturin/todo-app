export function addTodoAction(cathegorie, todo) {
  return {
    type: 'ADD_TODO',
    payload: {
      cathegorie,
      todo,
    },
  }
}
