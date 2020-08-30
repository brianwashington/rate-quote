import { combineReducers } from 'redux'

function rateQuotes(state = [], action) {
  switch (action.type) {
    case 'GET_RATE_QUOTES_SUCCESS':
      return action.rateQuotes || state

    default:
      return state
  }
}

function loanInfo(
  state = {
    loanSize: null,
    propertyType: 'SingleFamily',
    creditScore: null,
    occupancy: 'Primary',
  },
  action
) {
  switch (action.type) {
    case 'UPDATE_LOAN_SIZE':
      return {
        ...state,
        loanSize: +action.input,
      }

    case 'UPDATE_PROPERTY_TYPE':
      return {
        ...state,
        propertyType: action.input,
      }

    case 'UPDATE_CREDIT_SCORE':
      return {
        ...state,
        creditScore: +action.input,
      }

    case 'UPDATE_OCCUPANCY':
      return {
        ...state,
        occupancy: action.input,
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  rateQuotes,
  loanInfo,
})

export default rootReducer
