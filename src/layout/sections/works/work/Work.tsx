import styled from "styled-components";
import { StyledSubTitle } from "../../../../styles/StyledSubTitle";
import { StyledLink } from "../../../../styles/StyledLink";
import { StyledParagraph } from "../../../../styles/StyledParagraph";

type WorkPropsType = {
  title: string
  text: string
  src: string
}
export const Work = (props: WorkPropsType) => {
  return (
    <Styledwork>
      <Image src={props.src} alt="" />
      <StyledSubTitle>{props.title}</StyledSubTitle>
      <StyledParagraph>{props.text}</StyledParagraph>
      <StyledLink href={"#"}>demo</StyledLink>
      <StyledLink href={"#"}>code</StyledLink>
    </Styledwork>
  );
}

const Styledwork = styled.div`
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`