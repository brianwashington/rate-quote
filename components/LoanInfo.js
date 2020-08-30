import {
  updateCreditScore,
  updateLoanSize,
  updateOccupancy,
  updatePropertyType,
} from '../state/actions'

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
    <div>
      <label htmlFor='loan-size'>
        <span>Loan Size</span>
        <input onChange={handleChange} type='search' name='loan-size' />
      </label>
      <label htmlFor='property-type'>
        <span>Property Type</span>
        <select onChange={handleChange} name='property-type'>
          <option value='SingleFamily'>Single Family</option>
          <option value='Condo'>Condo</option>
          <option value='Townhouse'>Townhouse</option>
          <option value='MultiFamily'>Multi Family</option>
        </select>
      </label>
      <label htmlFor='credit-score'>
        <span>Credit Score</span>
        <input onChange={handleChange} type='search' name='credit-score' />
      </label>
      <label htmlFor='occupancy'>
        <span>Occupancy</span>
        <select onChange={handleChange} name='occupancy'>
          <option value='Primary'>Primary</option>
          <option value='Secondary'>Secondary</option>
          <option value='Investment'>Investment</option>
        </select>
      </label>
    </div>
  )
}
