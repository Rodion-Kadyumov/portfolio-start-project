import styled from "styled-components";

type ParagraphTypeProps = {
  weight?: string
  size?: string
  margin?: string
}

export const StyledParagraph = styled.p<ParagraphTypeProps>`
  font-weight: ${props => props.weight || "400"};
  font-size: ${props => props.size || "14px"};
  margin: ${props => props.margin || "0px"};
  span {
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      display: inline-block;
      width: 65%;
      height: 10px;
      background-color: #000000;
      position: absolute;
      bottom: 0;
      left: 190px;
      z-index: -1;
    }
  }
`