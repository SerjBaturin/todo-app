export function deleteTodoAction(cathegorie, todo) {
  return {
    type: 'DELETE_TODO',
    payload: {
      cathegorie,
      todo,
    },
  }
}
