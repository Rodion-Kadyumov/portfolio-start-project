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
`