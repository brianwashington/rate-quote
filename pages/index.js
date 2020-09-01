import PacmanLoader from 'react-spinners/PacmanLoader'
import LoanInfo from '../components/LoanInfo'

import { connect } from 'react-redux'
import {
  Container,
  Error,
  Grid,
  GridItem,
  LoaderContainer,
  LoanInfoContainer,
} from './index.style'
import { formatCurrency } from '../lib/utils'

function Home({
  dispatch,
  isLoading,
  rateQuotes,
  showResults,
  showNetworkFail,
}) {
  return (
    <Container>
      <LoanInfoContainer>
        <LoanInfo dispatch={dispatch} />

        {isLoading && !showResults && (
          <LoaderContainer>
            <PacmanLoader color='#6AD4B9' size={75} />
          </LoaderContainer>
        )}

        {showNetworkFail && (
          <LoaderContainer>
            <Error>Error Retrieving Data. Please try again.</Error>
          </LoaderContainer>
        )}

        {!isLoading && showResults && (
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
    isLoading: state.isLoading,
    rateQuotes: state.rateQuotes,
    showNetworkFail: state.showNetworkFail,
    showResults: state.showResults,
  }
}

export default connect(mapStateToProps)(Home)
