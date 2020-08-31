import LoanInfo from '../components/LoanInfo'

import { connect } from 'react-redux'
import { fetchData } from '../state/actions'
import {
  Container,
  ButtonContainer,
  SubmitButton,
  ResultsTable,
  ResultsTableRow,
} from './index.style'

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
    <Container>
      <LoanInfo dispatch={dispatch} />
      <form onSubmit={submitHandler}>
        <ButtonContainer>
          <SubmitButton type='submit'>Get Quotes</SubmitButton>
        </ButtonContainer>
      </form>

      <ResultsTable>
        {tableHeaders.map((title, index) => (
          <ResultsTableRow key={index}>{title}</ResultsTableRow>
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
              <React.Fragment key={index}>
                <ResultsTableRow>{lenderName}</ResultsTableRow>
                <ResultsTableRow>{loanType}</ResultsTableRow>
                <ResultsTableRow>{`${interestRate.toFixed(
                  3
                )}%`}</ResultsTableRow>
                <ResultsTableRow>
                  {currencyFormatter.format(closingCosts)}
                </ResultsTableRow>
                <ResultsTableRow>
                  {currencyFormatter.format(monthlyPayment)}
                </ResultsTableRow>
                <ResultsTableRow>{`${apr.toFixed(3)}%`}</ResultsTableRow>
              </React.Fragment>
            )
          }
        )}
      </ResultsTable>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    rateQuotes: state.rateQuotes,
  }
}

export default connect(mapStateToProps)(Home)
