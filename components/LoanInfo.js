import {
  updateCreditScore,
  updateLoanSize,
  updateOccupancy,
  updatePropertyType,
} from '../state/actions'

import { Container, Input, Label, Select, Span } from './LoanInfo.style'

export default function LoanInfo({ dispatch }) {
  function handleChange(event) {
    const { target } = event
    const { name, value } = target

    switch (name) {
      case 'loan-size':
        dispatch(updateLoanSize(value))
        break

      case 'property-type':
        dispatch(updatePropertyType(value))
        break

      case 'credit-score':
        dispatch(updateCreditScore(value))
        break

      case 'occupancy':
        dispatch(updateOccupancy(value))
        break
    }
  }

  return (
    <Container>
      <Label htmlFor='loan-size'>
        <Span>Loan Size</Span>
        <Input onChange={handleChange} type='search' name='loan-size' />
      </Label>
      <Label htmlFor='property-type'>
        <Span>Property Type</Span>
        <Select onChange={handleChange} name='property-type'>
          <option value='SingleFamily'>Single Family</option>
          <option value='Condo'>Condo</option>
          <option value='Townhouse'>Townhouse</option>
          <option value='MultiFamily'>Multi Family</option>
        </Select>
      </Label>
      <Label htmlFor='credit-score'>
        <Span>Credit Score</Span>
        <Input onChange={handleChange} type='search' name='credit-score' />
      </Label>
      <Label htmlFor='occupancy'>
        <Span>Occupancy</Span>
        <Select onChange={handleChange} name='occupancy'>
          <option value='Primary'>Primary Residence</option>
          <option value='Secondary'>Secondary Residence</option>
          <option value='Investment'>Investment</option>
        </Select>
      </Label>
    </Container>
  )
}
