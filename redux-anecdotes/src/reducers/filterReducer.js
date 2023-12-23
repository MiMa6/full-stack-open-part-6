const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_FILTER': {
      return action.payload
    }
    default:
      return state
  }
}

export const filterChange = filter => {
  return {
    type: 'SET_SEARCH_FILTER',
    payload: filter,
  }
}

export default filterReducer