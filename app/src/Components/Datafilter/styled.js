import styled from 'styled-components'


export const Wrapper = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 250px;
    margin: 10px;
    padding: 24px;
    height: 100vh;
    background-color: #DEE1DD;
`

export const Input = styled.input`
    width: 250px;
    padding: 12px 20px;
    box-sizing: border-box;
    outline-color: #C4CDC1;
`

export const Button = styled.input`
    margin-top: 4px;
    width: 100%;
    background-color: #658B6F; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`

export const Symbol = styled.div`
  width: 100%;
  background-color: #28363D;
  padding: 16px 0px;
  margin: 8px 0px;
  color: white;
  text-indent: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DeleteIcon = styled.input`
  width:24px;
  height: 24px;
  margin: 0px 16px;
`
export const Suggestion = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #DEE1DD;
  background-color: #C4CDC1;
  &:hover {
    background-color: #B0B8AD;
  }
`

export const SuggestionName = styled.p`
  margin: 2px;
`

export const SuggestionSymbol = styled.p`
  margin: 2px;
  font-size: 12px;
`

export const SuggestionWrapper = styled.div`
  position: fixed;
  top: 78px;
  width: 250px;
  z-index:500;
  color: white;
  display: flex;
  flex-direction: column;
`