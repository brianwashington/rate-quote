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

// UI State
function isLoading(state = false, action) {
  switch (action.type) {
    case 'GET_RATE_QUOTES_SUCCESS':
    case 'GET_RATE_QUOTES_FAILURE':
      return false

    case 'GET_RATE_QUOTES_PENDING':
      return true

    default:
      return state
  }
}

function showResults(state = false, action) {
  switch (action.type) {
    case 'GET_RATE_QUOTES_SUCCESS':
      return true

    case 'GET_RATE_QUOTES_FAILURE':
    case 'GET_RATE_QUOTES_PENDING':
      return false

    default:
      return state
  }
}

function showNetworkFail(state = false, action) {
  switch (action.type) {
    case 'GET_RATE_QUOTES_FAILURE':
      return true

    case 'GET_RATE_QUOTES_PENDING':
    case 'GET_RATE_QUOTES_SUCCESS':
      return false

    default:
      return state
  }
}

const rootReducer = combineReducers({
  isLoading,
  loanInfo,
  rateQuotes,
  showNetworkFail,
  showResults,
})

export default rootReducer
