import styled from "styled-components";

type ButtonPropsType = {

}

export const StyledBtn = styled.button<ButtonPropsType>`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  cursor: pointer;
  border-radius: 30px;
  background-color: #00CED1;
  color: #FFFFFF;
  
  &:hover {
    box-shadow: 0 0 20px #00CED1, 0 0 40px #00CED1, 0 0 80px #00CED1;
      color: #000000;
      background-color: #FFFFFF
  }
`