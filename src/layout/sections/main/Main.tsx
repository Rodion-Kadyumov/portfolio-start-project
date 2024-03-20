import styled from "styled-components";
import { StyledParagraph } from "../../../styles/StyledParagraph";
import { StyledSpan } from "../../../styles/StyledSpan";
import { StyledTitle } from "../../../styles/StyledTitle";
import photo from "../../../assets/images/me.jpeg"
import { FlexWrapper } from "../../../styles/FlexWrapper";
import { Container } from "../../../styles/Container";
import { myTheme } from "../../../styles/Theme.styles";
import Typewriter from 'typewriter-effect';



export const Main = () => {
  return (
  <StyledMain>
    <Container>
      <FlexWrapper align={"center"} justify={"space-between"}>
        <div>
          <StyledSpan>Hi There</StyledSpan>
          <StyledParagraph weight={"700"} size={"50px"}>I am <span>Rodion Kaduymov</span></StyledParagraph>
          <StyledTitle>
            <Typewriter
              options={{
                strings: ["A Web Developer."],
                autoStart: true,
                loop: true,
              }}
            />
          </StyledTitle>
        </div>
        <PhotoWrapper>
          <div>
            <Photo src={photo} alt="Фото"/>
          </div>
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
  div {
    width:360px;
    height: 450px;
    overflow: hidden;
  }
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${myTheme.colors.secondary};
    position: absolute;
    top: -10px;
    left: 20px;
    z-index: -1;
  }
`

const Photo = styled.img`
  position: relative;
  object-fit: cover;
  top: -100px;
  left: -130px;
`