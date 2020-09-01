import { useState } from 'react'
import {
  updateCreditScore,
  updateLoanSize,
  updateOccupancy,
  updatePropertyType,
} from '../state/actions'

import {
  ButtonContainer,
  Error,
  Form,
  Input,
  Label,
  Select,
  Span,
  SubmitButton,
} from './LoanInfo.style'
import { fetchData } from '../state/actions'
import { formatCurrency } from '../lib/utils'

export default function LoanInfo({ dispatch }) {
  const [loanSize, setLoanSize] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [isLoanSizeValid, setIsLoanSizeValid] = useState(false)
  const [hasLoanSizeChanged, setHasLoanSizeChanged] = useState(false)
  const [isCreditScoreValid, setIsCreditScoreValid] = useState(false)
  const [hasCreditScoreChanged, setHasCreditScoreChanged] = useState(false)

  function isFormValid() {
    return !(isLoanSizeValid && isCreditScoreValid)
  }

  function toggleEditing() {
    setIsEditing(!isEditing)
  }

  function submitHandler(e) {
    e.preventDefault()
    dispatch(fetchData())
  }

  function handleChange(event) {
    const { target } = event
    const { name, value } = target

    switch (name) {
      case 'loan-size':
        setHasLoanSizeChanged(true)
        setIsLoanSizeValid(/^\d+$/.test(value) && +value >= 1)
        setLoanSize(value)
        dispatch(updateLoanSize(value))
        break

      case 'property-type':
        dispatch(updatePropertyType(value))
        break

      case 'credit-score':
        if (value.length >= 3) {
          setHasCreditScoreChanged(true)
        }
        setIsCreditScoreValid(
          /^\d{3}$/.test(value) && value >= 300 && value <= 850
        )
        dispatch(updateCreditScore(value))
        break

      case 'occupancy':
        dispatch(updateOccupancy(value))
        break
    }
  }

  return (
    <Form onSubmit={submitHandler}>
      <Label htmlFor='loan-size'>
        <Span>
          {!isLoanSizeValid && hasLoanSizeChanged ? (
            <Error name='loan-size-error'>Please enter a value</Error>
          ) : (
            'Loan Size'
          )}
        </Span>
        {isEditing ? (
          <Input
            onChange={handleChange}
            onBlur={toggleEditing}
            name='loan-size'
            type='number'
            value={loanSize}
          />
        ) : (
          <Input
            onFocus={toggleEditing}
            value={loanSize ? formatCurrency(loanSize, false) : ''}
            name='loan-size'
            type='text'
            placeholder='$'
            /*this is just to prevent a warning in the console. 
            I removed the readOnly attribute so that this will work on mobile devices*/
            onChange={() => {}}
          />
        )}
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
        <Span>
          {!isCreditScoreValid && hasCreditScoreChanged ? (
            <Error name='credit-score-error'>Enter value: 300 to 850</Error>
          ) : (
            'Credit Score'
          )}
        </Span>
        <Input
          onChange={handleChange}
          type='number'
          name='credit-score'
          min='300'
          max='850'
        />
      </Label>
      <Label htmlFor='occupancy'>
        <Span>Occupancy</Span>
        <Select onChange={handleChange} name='occupancy'>
          <option value='Primary'>Primary Residence</option>
          <option value='Secondary'>Secondary Residence</option>
          <option value='Investment'>Investment</option>
        </Select>
      </Label>
      <div>&nbsp;</div> {/* <!-- empty space to keep grid aligned --> */}
      <ButtonContainer>
        <SubmitButton type='submit' disabled={isFormValid()}>
          Quote Rates
        </SubmitButton>
      </ButtonContainer>
    </Form>
  )
}
