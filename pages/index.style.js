import styled from 'styled-components'

export const Container = styled.div`
  width: 750px;
  margin: 100px auto;
`

export const LoanInfoContainer = styled.div`
  margin-bottom: 50px;
`

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 0.75fr repeat(5, 0.5fr);
  margin-top: 10px;
  align-items: center;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  width: 100%;
`

export const ResultsItem = styled.div`
  border-width: 2px 0 0px 0;
  border-style: solid;
  border-color: rgba(128, 128, 128, 0.2);
  white-space: nowrap;
  border-width: ${(props) => (props.last ? '2px 0 2px 0' : '2px 0 0 0')};
  padding: ${(props) => (props.header ? '25px 0' : '35px 0')};
  color: ${(props) =>
    props.header ? 'rgb(134, 151, 151)' : 'rgb(38, 67, 66)'};
`
export const ResultsItemLeftEnd = styled(ResultsItem)`
  border-left-width: 2px;
  padding-left: 10px;
  padding-right: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ResultsItemRightEnd = styled(ResultsItem)`
  border-right-width: 2px;
  padding-left: 20px;
`
