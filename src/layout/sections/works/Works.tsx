import styled from "styled-components"
import { StyledSubTitle } from "../../../styles/StyledSubTitle"
import { Menu } from "../../../components/menu/Menu"
import { FlexWrapper } from "../../../styles/FlexWrapper"
import { Work } from "./work/Work"
import social from "../../../assets/images/social.png"
import timer from "../../../assets/images/timer.png"

const worksItems = ["All", "Landing page", "React", "SPA",]

export const Works = () => {
  return (
  <StyledWorks>
      <StyledSubTitle>My Works</StyledSubTitle>
      <Menu menuItems={worksItems}/>
      <FlexWrapper justify={"space-around"}>
        <Work title={"Social network"}
              src={social}
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro earum, ipsam quis eos sed nostrum quam reiciendis corporis aut fugiat repudiandae aspernatur unde quod quisquam fugit facere exercitationem maiores in."/>
        <Work title={"Timer"}
              src={timer}
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro earum, ipsam quis eos sed nostrum quam reiciendis corporis aut fugiat repudiandae aspernatur unde quod quisquam fugit facere exercitationem maiores in."/>
      </FlexWrapper>
    </StyledWorks>
  )
  
}

const StyledWorks = styled.section`
  min-height: 100vh;
`