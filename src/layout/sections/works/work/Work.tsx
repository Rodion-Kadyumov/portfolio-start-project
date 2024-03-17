import styled from "styled-components";
import { StyledLink } from "../../../../styles/StyledLink";
import { StyledParagraph } from "../../../../styles/StyledParagraph";
import { StyledSubTitle3 } from "../../../../styles/StyledSubTitle";
import { StyledBtn } from "../../../../styles/StyledBtn";

type WorkPropsType = {
  title: string
  text: string
  src: string
}
export const Work = (props: WorkPropsType) => {
  return (
    <Styledwork>
      <ImageWrapper>
        <Image src={props.src} alt="" />
        <StyledBtn>view project</StyledBtn>
      </ImageWrapper>
      <Description>
        <StyledSubTitle3 transform={"none"}>{props.title}</StyledSubTitle3>
        <StyledParagraph>{props.text}</StyledParagraph>
        <StyledLink href={"#"}>demo</StyledLink>
        <StyledLink href={"#"}>code</StyledLink>
      </Description>
    </Styledwork>
  );
}

const Styledwork = styled.div`
  max-width: 540px;
  width: 100%;
`
const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    ${StyledBtn} {
      opacity: 1;
    }
    &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    }
  }

  ${StyledBtn} {
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Description = styled.div`
  padding: 25px 20px;
`