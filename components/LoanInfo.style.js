import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 15px;
  font-size: 14px;
`

export const Label = styled.label`
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
`

export const Span = styled.span`
  justify-self: end;
  margin-right: 5px;
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
