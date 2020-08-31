import LoanInfo from '../components/LoanInfo'

import { connect } from 'react-redux'
import { fetchData } from '../state/actions'
import {
  Container,
  ButtonContainer,
  LoanInfoContainer,
  ResultsGrid,
  ResultsItem,
  ResultsItemLeftEnd,
  ResultsItemRightEnd,
  SubmitButton,
} from './index.style'

function Home({ dispatch, rateQuotes, showResults }) {
  function submitHandler(e) {
    e.preventDefault()
    dispatch(fetchData())
  }

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <Container>
      <LoanInfoContainer>
        <LoanInfo dispatch={dispatch} />
        <form onSubmit={submitHandler}>
          <ButtonContainer>
            <SubmitButton type='submit'>Quote Rates</SubmitButton>
          </ButtonContainer>
        </form>

        {showResults && (
          <ResultsGrid>
            <ResultsItemLeftEnd header>Lender</ResultsItemLeftEnd>
            <ResultsItem header>Product</ResultsItem>
            <ResultsItem header>Rate</ResultsItem>
            <ResultsItem header>Closing Costs</ResultsItem>
            <ResultsItem header>Monthly Payment</ResultsItem>
            <ResultsItemRightEnd header>APR</ResultsItemRightEnd>

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
                    <ResultsItemLeftEnd last={index === rateQuotes.length - 1}>
                      {lenderName}
                    </ResultsItemLeftEnd>
                    <ResultsItem last={index === rateQuotes.length - 1}>
                      {loanType}
                    </ResultsItem>
                    <ResultsItem
                      last={index === rateQuotes.length - 1}
                    >{`${interestRate.toFixed(3)}%`}</ResultsItem>
                    <ResultsItem last={index === rateQuotes.length - 1}>
                      {currencyFormatter.format(closingCosts)}
                    </ResultsItem>
                    <ResultsItem last={index === rateQuotes.length - 1}>
                      {currencyFormatter.format(monthlyPayment)}
                    </ResultsItem>
                    <ResultsItemRightEnd
                      last={index === rateQuotes.length - 1}
                    >{`${apr.toFixed(3)}%`}</ResultsItemRightEnd>
                  </React.Fragment>
                )
              }
            )}
          </ResultsGrid>
        )}
      </LoanInfoContainer>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    rateQuotes: state.rateQuotes,
    showResults: state.showResults,
  }
}

export default connect(mapStateToProps)(Home)
