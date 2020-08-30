import LoanInfo from '../components/LoanInfo'

import { connect } from 'react-redux'
import { fetchData } from '../state/actions'

function Home({ dispatch }) {
  function submitHandler(e) {
    e.preventDefault()
    dispatch(fetchData())
  }

  return (
    <div>
      <LoanInfo dispatch={dispatch} />
      <form onSubmit={submitHandler}>
        <button type='submit'>Get Quotes</button>
      </form>
    </div>
  )
}

export default connect()(Home)
