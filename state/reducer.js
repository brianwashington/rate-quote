import { combineReducers } from 'redux'

function rateQuotes(state = [], action) {
  switch (action.type) {
    case 'GET_RATE_QUOTES_SUCCESS':
      return action.rateQuotes

    default:
      return state
  }
}

const rootReducer = combineReducers({
  rateQuotes,
})

export default rootReducer
