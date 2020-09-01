import LoanInfo from '../components/LoanInfo'

import { connect } from 'react-redux'
import { Container, LoanInfoContainer, Grid, GridItem } from './index.style'
import { formatCurrency } from '../lib/utils'

function Home({ dispatch, rateQuotes, showResults }) {
  return (
    <Container>
      <LoanInfoContainer>
        <LoanInfo dispatch={dispatch} />

        {showResults && (
          <Grid name='results-grid'>
            <GridItem>Lender</GridItem>
            <GridItem>Product</GridItem>
            <GridItem>Rate</GridItem>
            <GridItem>Closing Costs</GridItem>
            <GridItem>Monthly Payment</GridItem>
            <GridItem>APR</GridItem>

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
                    <GridItem>{lenderName}</GridItem>
                    <GridItem>{loanType}</GridItem>
                    <GridItem>{`${interestRate.toFixed(3)}%`}</GridItem>
                    <GridItem>{formatCurrency(closingCosts)}</GridItem>
                    <GridItem>{formatCurrency(monthlyPayment)}</GridItem>
                    <GridItem>{`${apr.toFixed(3)}%`}</GridItem>
                  </React.Fragment>
                )
              }
            )}
          </Grid>
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
