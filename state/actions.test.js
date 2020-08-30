import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
import expect from 'expect'
import mockData from '../api/mockData'

require('jest-fetch-mock').enableMocks()

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('fetchData creates GET_RATE_QUOTES_SUCCESS when fetching rateQuotes has been completed', () => {
    fetch.mockResponseOnce(JSON.stringify(mockData))
    const store = mockStore({})

    const expectedAction = {
      type: 'GET_RATE_QUOTES_SUCCESS',
      rateQuotes: mockData.rateQuotes,
    }

    return store.dispatch(actions.fetchData()).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(expectedAction)
    })
  })
})
