import styled from "styled-components";

type ParagraphTypeProps = {
  weight?: string
  size?: string
}

export const StyledParagraph = styled.p<ParagraphTypeProps>`
  font-weight: ${props => props.weight || "400"};
  font-size: ${props => props.size || "14px"};
  span {
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      display: inline-block;
      width: 180%;
      height: 10px;
      background-color: #000000;
      position: absolute;
      bottom: 0;
      left: -120px;
      z-index: -1;
    }
  }
`