import styled from "styled-components";
import { myTheme } from "./Theme.styles";

type SubTitlePropsType = {
  font?: string
  weight?: string
  size?: string
  margin?: string
  spacing?: string
  transform?: string
}
export const StyledSubTitle = styled.h2<SubTitlePropsType>`
  font-family: "Josefin Sans", sans-serif;
  font-weight: ${props => props.weight || "600"};
  font-size: ${props => props.size || "36px"};
  letter-spacing: ${props => props.spacing || "5px"};
  margin: ${props => props.margin || "0 0 90px 0"};
  text-align: center;

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${myTheme.colors.primary};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
  }
`
export const StyledSubTitle3 = styled.h3<SubTitlePropsType>`
  font-family: "Josufin Sans", sans-serif;
  font-weight: ${props => props.weight || "700"};
  font-size: ${props => props.size || "16px"};
  margin: ${props => props.margin || "70px 0 15px"};
  letter-spacing: ${props => props.spacing || "1px"};
  text-transform: ${props => props.transform || "uppercase"};
`