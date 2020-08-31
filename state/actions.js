import { stringifyUrl } from 'query-string'

const fetchData = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const { loanInfo } = state

    const headers = new Headers()
    headers.append('accept', 'application/json')
    headers.append(
      'Authorization',
      `OU-AUTH ${process.env.NEXT_PUBLIC_API_KEY}`
    )

    const request = stringifyUrl({
      url: process.env.NEXT_PUBLIC_API_URL || '',
      query: loanInfo,
    })

    const requestOptions = {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default',
    }

    try {
      const fetchRequest = await fetch(request, requestOptions)
      const rateQuotes = await fetchRequest.json()

      return dispatch({
        type: 'GET_RATE_QUOTES_SUCCESS',
        rateQuotes: rateQuotes.rateQuotes,
      })
    } catch (error) {
      console.error('error', error)
      return dispatch({
        type: 'GET_RATE_QUOTES_FAILURE',
        rateQuotes: [],
      })
    }
  }
}

const updateLoanSize = (input) => {
  return async (dispatch) => {
    return dispatch({
      type: 'UPDATE_LOAN_SIZE',
      input,
    })
  }
}

const updatePropertyType = (input) => {
  return async (dispatch) => {
    return dispatch({
      type: 'UPDATE_PROPERTY_TYPE',
      input,
    })
  }
}

const updateCreditScore = (input) => {
  return async (dispatch) => {
    return dispatch({
      type: 'UPDATE_CREDIT_SCORE',
      input,
    })
  }
}

const updateOccupancy = (input) => {
  return async (dispatch) => {
    return dispatch({
      type: 'UPDATE_OCCUPANCY',
      input,
    })
  }
}

export {
  fetchData,
  updateLoanSize,
  updatePropertyType,
  updateCreditScore,
  updateOccupancy,
}
