import styled from "styled-components";

type SpanPropsType = {
  font?: string
  weight?: string
  size?: string
  color?: string
}

export const StyledSpan = styled.span<SpanPropsType>`
  font-weight: ${props => props.weight || "400"};
  font-size: ${props => props.size || "14px"};
  color: ${props => props.color || "#000000"}
`