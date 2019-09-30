const initialState = {
  cathegorie: Object.keys(localStorage)[0] || 'There are no cathegories',
  todos: localStorage.getItem(Object.keys(localStorage)[0]),
}

function showDataReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_DATA':
      return (state = {
        cathegorie: action.cathegorie,
        todos: localStorage.getItem(action.cathegorie),
      })
    default:
      return state
  }
}

export default showDataReducer
