const initialState = Object.keys(localStorage)[0] || 'There are no cathegories'

const todoHeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_HEADER':
      return (state = action.payload)
    default:
      return state
  }
}

export default todoHeaderReducer
