import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 20px;

  @media (min-width: 1024px) {
    width: 750px;
    margin: 100px auto;
  }
`

export const LoanInfoContainer = styled.div`
  margin-bottom: 50px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px repeat(5, 0.5fr);
  overflow: scroll;
  text-overflow: ellipsis;
  min-width: 0;
  min-height: 0;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 200px repeat(5, 0.5fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 0.75fr repeat(5, 0.5fr);
    margin-top: 10px;
    font-size: 14px;
    overflow: hidden;
    width: 100%;
  }
`

export const GridItem = styled.div`
  border-width: 2px 0 0px 0;
  border-style: solid;
  border-color: rgba(128, 128, 128, 0.2);
  white-space: nowrap;
  padding: 35px 0;

  color: ${(props) =>
    props.header ? 'rgb(134, 151, 151)' : 'rgb(38, 67, 66)'};

  :nth-child(1) {
    border-top-left-radius: 3px;
  }

  :nth-child(6) {
    border-top-right-radius: 3px;
  }

  :nth-last-child(6) {
    border-bottom-left-radius: 3px;
  }

  :last-child {
    border-bottom-right-radius: 3px;
  }

  //top row
  :nth-child(-n + 6) {
    padding: 25px 0;
  }

  //first element of each row
  :nth-child(6n + 1) {
    border-left-width: 2px;
    padding-left: 10px;
    padding-right: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  //last element of each row
  :nth-child(6n + 6) {
    border-right-width: 2px;
    padding-left: 20px;
  }

  //add bottom border to last row
  :nth-last-child(-n + 6) {
    border-bottom-width: 2px;
  }
`
