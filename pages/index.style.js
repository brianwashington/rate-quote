import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  margin: 100px auto;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const SubmitButton = styled.button`
  color: white;
  background-color: rgb(32, 62, 61);
  border: none;
  padding: 15px;
  border-radius: 3px;
  margin-top: 5px;
`

export const ResultsTable = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr) 2fr 1fr;
  margin-top: 10px;
  align-items: center;
`

export const ResultsTableRow = styled.div`
  border: 1px solid rgba(128, 128, 128, 0.2);
  padding: 50px 0;
  border-left: none;
  border-right: none;
`
