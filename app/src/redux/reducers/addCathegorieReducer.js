const initialState = Object.keys(localStorage)

const addCathegorieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATHEGORIE':
      localStorage.setItem(action.payload, '')
      return [...state, action.payload]
    default:
      return state
  }
}

export default addCathegorieReducer
