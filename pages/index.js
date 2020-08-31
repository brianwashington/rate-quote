import LoanInfo from '../components/LoanInfo'

import { connect } from 'react-redux'
import { fetchData } from '../state/actions'

function Home({ dispatch, rateQuotes }) {
  function submitHandler(e) {
    e.preventDefault()
    dispatch(fetchData())
  }

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const tableHeaders = [
    'Lender',
    'Product',
    'Rate',
    'Closing Costs',
    'Monthly Payment',
    'APR',
  ]

  return (
    <div>
      <LoanInfo dispatch={dispatch} />
      <form onSubmit={submitHandler}>
        <button type='submit'>Get Quotes</button>
      </form>

      {tableHeaders.map((title) => (
        <div>{title}</div>
      ))}

      {rateQuotes.map(
        (
          {
            apr,
            lenderName,
            loanType,
            interestRate,
            closingCosts,
            monthlyPayment,
          },
          index
        ) => {
          return (
            <div key={index}>
              <div>{lenderName}</div>
              <div>{loanType}</div>
              <div>{`${interestRate.toFixed(3)}%`}</div>
              <div>{currencyFormatter.format(closingCosts)}</div>
              <div>{currencyFormatter.format(monthlyPayment)}</div>
              <div>{`${apr.toFixed(3)}%`}</div>
            </div>
          )
        }
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    rateQuotes: state.rateQuotes,
  }
}

export default connect(mapStateToProps)(Home)
