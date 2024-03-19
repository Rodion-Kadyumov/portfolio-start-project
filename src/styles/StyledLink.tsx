import styled from "styled-components";
import { myTheme } from "./Theme.styles";

type LinkPropsType = {
  // margin?: string
  // width?: string
  // height?: string
}
export const StyledLink = styled.a<LinkPropsType>`
  cursor: pointer;
  display: flex;
  color: ${myTheme.colors.primary};
`