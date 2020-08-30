import { connect } from 'react-redux'
import { fetchData } from '../state/actions'

function Home({ dispatch }) {
  function submitHandler(e) {
    e.preventDefault()
    dispatch(fetchData())
  }

  return (
    <form onSubmit={submitHandler}>
      <button type='submit'>Get Quotes</button>
    </form>
  )
}

export default connect()(Home)
