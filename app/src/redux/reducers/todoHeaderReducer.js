const initialState = ''

const todoHeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_HEADER':
      return (state = action.payload)
    default:
      return state
  }
}

export default todoHeaderReducer
