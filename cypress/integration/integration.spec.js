describe.only('Visits Rate Quotes ', () => {
  it('Fills and Submits Form', () => {
    cy.visit('http://localhost:3000')

    cy.get('div[name="results-grid"]').should('not.exist')

    cy.get('input[name="loan-size"]').click().type(350000)
    cy.get('input[name="credit-score"]').click().type(750)
    cy.get('select[name="property-type"]').select('Condo')
    cy.get('button[type="submit"]').click()

    cy.get('div[name="results-grid"]').should('exist')
  })

  it('Confirms Validation Checks', () => {
    const loanSizeError = 'small[name="loan-size-error"]'
    const creditScoreError = 'small[name="credit-score-error"]'

    cy.visit('http://localhost:3000')

    cy.get(loanSizeError).should('not.exist')
    cy.get('input[name="loan-size"]').click().type(0)
    cy.get(loanSizeError).should('exist')

    cy.get(creditScoreError).should('not.exist')
    cy.get('input[name="credit-score"]').click().type(999)
    cy.get(creditScoreError).should('exist')

    cy.get('select[name="property-type"]').select('Condo')
    cy.get('button[type="submit"]').should('be.disabled')
  })
})
