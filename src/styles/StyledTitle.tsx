import styled from "styled-components";

type TitlePropsType = {
  font?: string
  weight?: string
  size?: string
  margin?: string
}

export const StyledTitle = styled.h1<TitlePropsType>`
  font-weight: ${props => props.weight || "400"};
  font-size: ${props => props.size || "27px"};
  margin: ${props => props.margin || "10px 0"};
`