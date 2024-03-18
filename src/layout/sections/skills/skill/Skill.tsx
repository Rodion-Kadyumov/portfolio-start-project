import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { StyledParagraph } from "../../../../styles/StyledParagraph";
import { FlexWrapper } from "../../../../styles/FlexWrapper";
import { myTheme } from "../../../../styles/Theme.styles";
import { StyledSubTitle3 } from "../../../../styles/StyledSubTitle";

type SkillPropsType = {
  iconId: string
  title: string
  description: string
}

export const Skill = (props:SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={"column"} align={"center"}>
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        <StyledSubTitle3>{props.title}</StyledSubTitle3>
        <StyledParagraph>{props.description}</StyledParagraph>
      </FlexWrapper>
      </StyledSkill>
  );
}

const StyledSkill = styled.div`
  width: 380px;
  padding: 62px 20px 40px;
`

const IconWrapper = styled.div`
  /* background-color: ${myTheme.colors.secondary};
  opacity: 0.5; */
`