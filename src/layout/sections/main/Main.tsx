import styled from "styled-components";
import { StyledParagraph } from "../../../styles/StyledParagraph";
import { StyledSpan } from "../../../styles/StyledSpan";
import { StyledTitle } from "../../../styles/StyledTitle";
import photo from "../../../assets/images/me.jpeg"
import { FlexWrapper } from "../../../styles/FlexWrapper";


export const Main = () => {
  return (
<StyledMain>
    <FlexWrapper align={"center"} justify={"space-around"}>
      <div>
        <StyledSpan>Hi There</StyledSpan>
        <StyledParagraph>I am Rodion Kaduymov</StyledParagraph>
        <StyledTitle>A Web Developer.</StyledTitle>
      </div>
      <Photo src={photo} alt=""/>
    </FlexWrapper>
  </StyledMain>
  )
  
}

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #fff5e7;
`

const Photo = styled.img`
  object-fit: cover;
`