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
      background-color: chartreuse;
  
  &:hover {
    box-shadow: 0 0 20px chartreuse, 0 0 40px chartreuse, 0 0 80px chartreuse;
      color: #000000;
      background-color: #FFFFFF
  }
`