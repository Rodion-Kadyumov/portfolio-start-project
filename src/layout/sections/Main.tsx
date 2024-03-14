import styled from "styled-components";
import { StyledParagraph } from "../../styles/StyledParagraph";
import { StyledSpan } from "../../styles/StyledSpan";
import { StyledTitle } from "../../styles/StyledTitle";
import { Icon } from "../../components/icon/Icon";


export const Main = () => {
  <StyledMain>
    <StyledSpan>Hi There</StyledSpan>
    <StyledParagraph>I am Rodion Kaduymov</StyledParagraph>
    <StyledTitle>A Web Developer.</StyledTitle>
    <Icon iconId={'git'}/>
  </StyledMain>
}

const StyledMain = styled.div`

`