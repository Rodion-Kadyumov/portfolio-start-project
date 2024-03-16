import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { StyledParagraph } from "../../../../styles/StyledParagraph";

type SkillPropsType = {
  iconId: string
  title: string
  description: string
}

export const Skill = (props:SkillPropsType) => {
  return (
    <StyledSkill>
        <Icon iconId={props.iconId}/>
        <StyledSkillTitle>{props.title}</StyledSkillTitle>
        <StyledParagraph>{props.description}</StyledParagraph>
      </StyledSkill>
  );
}

const StyledSkill = styled.div`
  width: 30%
`
const StyledSkillTitle = styled.h3`
  
`