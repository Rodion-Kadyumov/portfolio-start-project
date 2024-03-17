import styled from "styled-components"
import { StyledSubTitle } from "../../../styles/StyledSubTitle"
import { Icon } from "../../../components/icon/Icon"
import { Slider } from "../../../components/slider/Slider"
import { FlexWrapper } from "../../../styles/FlexWrapper"

export const Testimony = () => {
  return (
    <StyledTestimony>
      <StyledSubTitle>Testimony</StyledSubTitle>
      <FlexWrapper direction={"column"} align={"center"}>
        <Icon iconId={'text'} />
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  )
  
}

const StyledTestimony = styled.section`
  
`