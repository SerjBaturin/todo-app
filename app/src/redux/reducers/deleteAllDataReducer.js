const deleteAllDataReducer = (state = '', action) => {
  switch (action.type) {
    case 'DELETE_ALL_DATA':
      localStorage.clear()
      return null
    default:
      return state
  }
}

export default deleteAllDataReducer
