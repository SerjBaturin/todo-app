const deleteCathegorieReducer = (state = '', action) => {
  switch (action.type) {
    case 'DELETE_CATHEGORIE':
      localStorage.removeItem(action.cathegorie)
      return null
    default:
      return state
  }
}

export default deleteCathegorieReducer
