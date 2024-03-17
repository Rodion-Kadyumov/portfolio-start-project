import styled from "styled-components";
import { StyledParagraph } from "../../../styles/StyledParagraph";
import { StyledSpan } from "../../../styles/StyledSpan";
import { StyledTitle } from "../../../styles/StyledTitle";
import photo from "../../../assets/images/me.jpeg"
import { FlexWrapper } from "../../../styles/FlexWrapper";
import { Container } from "../../../styles/Container";
import { myTheme } from "../../../styles/Theme.styles";


export const Main = () => {
  return (
  <StyledMain>
    <Container>
      <FlexWrapper align={"center"} justify={"space-between"}>
        <div>
          <StyledSpan>Hi There</StyledSpan>
          <StyledParagraph weight={"700"} size={"50px"}>I am <span>Rodion Kaduymov</span></StyledParagraph>
          <StyledTitle>A Web Developer.</StyledTitle>
        </div>
        <PhotoWrapper>
          <Photo src={photo} alt="Фото"/>
        </PhotoWrapper>
      </FlexWrapper>
    </Container>
  </StyledMain>
  )
  
}

const StyledMain = styled.section`
  display: flex;
`
const PhotoWrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${myTheme.colors.secondary};
    position: absolute;
    top: 95px;
    left: 120px;
    z-index: -1;
  }
`

const Photo = styled.img`
  object-fit: cover;
  overflow: hidden;
`