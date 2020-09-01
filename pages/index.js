import LoanInfo from '../components/LoanInfo'

import { connect } from 'react-redux'
import {
  Container,
  LoanInfoContainer,
  ResultsGrid,
  ResultsItem,
  ResultsItemLeftEnd,
  ResultsItemRightEnd,
} from './index.style'
import { formatCurrency } from '../lib/utils'

function Home({ dispatch, rateQuotes, showResults }) {
  return (
    <Container>
      <LoanInfoContainer>
        <LoanInfo dispatch={dispatch} />

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
                      {formatCurrency(closingCosts)}
                    </ResultsItem>
                    <ResultsItem last={index === rateQuotes.length - 1}>
                      {formatCurrency(monthlyPayment)}
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
