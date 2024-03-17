import styled from "styled-components"
import { StyledSubTitle } from "../../../styles/StyledSubTitle"
import { FlexWrapper } from "../../../styles/FlexWrapper"
import { Skill } from "./skill/Skill"
import { Container } from "../../../styles/Container"

export const SKills = () => {
  return (
    <StyledSkills>
      <Container>
        <StyledSubTitle>My Skills</StyledSubTitle>
        <FlexWrapper wrap={"wrap"}>
          <Skill iconId={"html"}
                  title={"HTML5"}
                  description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eaque! Necessitatibus natus eum unde ducimus vel ab temporibus dignissimos ipsum corrupti praesentium? Quis fugiat consequuntur dolorum rerum et maxime repellendus."} />
          <Skill iconId={"css"}
                  title={"CSS"}
                  description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eaque! Necessitatibus natus eum unde ducimus vel ab temporibus dignissimos ipsum corrupti praesentium? Quis fugiat consequuntur dolorum rerum et maxime repellendus."} />
          <Skill iconId={"scss"}
                  title={"SCSS"}
                  description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eaque! Necessitatibus natus eum unde ducimus vel ab temporibus dignissimos ipsum corrupti praesentium? Quis fugiat consequuntur dolorum rerum et maxime repellendus."} />
          <Skill iconId={"react"}
                  title={"React"}
                  description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eaque! Necessitatibus natus eum unde ducimus vel ab temporibus dignissimos ipsum corrupti praesentium? Quis fugiat consequuntur dolorum rerum et maxime repellendus."} />
          <Skill iconId={"redux"}
                  title={"Redux"}
                  description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eaque! Necessitatibus natus eum unde ducimus vel ab temporibus dignissimos ipsum corrupti praesentium? Quis fugiat consequuntur dolorum rerum et maxime repellendus."} />
          <Skill iconId={"git"}
                  title={"GIT"}
                  description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eaque! Necessitatibus natus eum unde ducimus vel ab temporibus dignissimos ipsum corrupti praesentium? Quis fugiat consequuntur dolorum rerum et maxime repellendus."} />
          <Skill iconId={"vs"}
                  title={"VS Code"}
                  description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eaque! Necessitatibus natus eum unde ducimus vel ab temporibus dignissimos ipsum corrupti praesentium? Quis fugiat consequuntur dolorum rerum et maxime repellendus."} />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`

`