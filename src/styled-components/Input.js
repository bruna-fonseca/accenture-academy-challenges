import styled from 'styled-components'

export const Input = styled.input`
  height: 50px;
  width: 300px;
  color: #000;
  border: 1px solid #C2C2C2;
  padding: 10px;
`

export const Button = styled.button`
  background-color: #77DD77;
  border: none;
  cursor: pointer;

  color: #FFF;
  font-weight: bold;
  font-size: 20px;

  height: 50px;
  width: 300px;
  margin-top: 20px;

  &:hover {
    background-color: #8B0000;
  }
`

export const Label = styled.label`
  margin-top: 10px;
  font-size: 16px;
`