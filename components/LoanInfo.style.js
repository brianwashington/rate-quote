import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  row-gap: 10px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 15px;
    font-size: 14px;
  }
`

export const Label = styled.label`
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: 150px 1fr;
    align-items: center;
  }
`

export const Span = styled.span`
  justify-self: start;
  margin-right: 5px;

  @media (min-width: 1024px) {
    justify-self: end;
    margin-right: 5px;
  }
`

export const Input = styled.input`
  border: 2px solid rgba(128, 128, 128, 0.2);
  padding: 5px;
  font-size: 14px;
`

export const Select = styled.select`
  border: 2px solid rgba(128, 128, 128, 0.2);
  padding: 5px;
  font-size: 14px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0 30px 0;
`

export const SubmitButton = styled.button`
  color: white;
  border: none;
  padding: 15px;
  border-radius: 3px;
  margin-top: 5px;
  background-color: ${(props) =>
    props.disabled ? 'rgba(32, 62, 61, 0.7)' : 'rgba(32, 62, 61, 1)'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`
export const Error = styled.small`
  color: red;
`
