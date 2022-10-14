import styled, { css } from 'styled-components'

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FlexDiv = styled.div`
  display: flex;
  margin: 10px;
`

const Square = styled.div`
  border: 1px solid black;
  padding: 10px 15px;
  margin: 5px;
`

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none !important;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    height: 30px !important;
    padding: 10px;
  }

  option[hidden] {
    display: none !important;
  }
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #1685d1;
  color: black;
  cursor: pointer;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: ;
      color: #1685d1;
    `};
`

export { CenteredDiv, FlexDiv, Square, Select, Button }
