import { stringifyUrl } from 'query-string'

const fetchData = () => {
  return async (dispatch) => {
    const headers = new Headers()
    headers.append('accept', 'application/json')
    headers.append(
      'Authorization',
      `OU-AUTH ${process.env.NEXT_PUBLIC_API_KEY}`
    )

    // using fake query for now
    const query = {
      loanSize: 300000,
      creditScore: 800,
      propertyType: 'SingleFamily',
      occupancy: 'Primary',
    }

    const request = stringifyUrl({
      url: process.env.NEXT_PUBLIC_API_URL || '',
      query,
    })

    const requestOptions = {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default',
    }

    const rateQuotes = await (await fetch(request, requestOptions)).json()

    return dispatch({
      type: 'GET_RATE_QUOTES_SUCCESS',
      rateQuotes: rateQuotes.rateQuotes,
    })
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
