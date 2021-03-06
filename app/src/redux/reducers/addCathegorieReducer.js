const initialState = Object.keys(localStorage)

const addCathegorieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATHEGORIE':
      localStorage.setItem(action.cathegorie, '')
      return [...state, action.cathegorie]
    default:
      return state
  }
}

export default addCathegorieReducer
