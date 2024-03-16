import styled from "styled-components"
import { StyledSubTitle } from "../../../styles/StyledSubTitle"
import { StyledForm } from "../../../styles/StyledForm"
import { StyledInput } from "../../../styles/StyledInput"
import { StyledBtn } from "../../../styles/StyledBtn"
import { FlexWrapper } from "../../../styles/FlexWrapper"

export const Contact = () => {
  return (
    <StyledContact>
      <StyledSubTitle>Contact</StyledSubTitle>
      <StyledForm>
        <StyledInput placeholder={"Name"} />
        <StyledInput placeholder={"Subject"} />
        <StyledInput as={"textarea"}/>
        <StyledBtn type={"submit"}>Send Messege</StyledBtn>
      </StyledForm>
    </StyledContact>
  )
  
}

const StyledContact = styled.section`
  min-height: 50 vh;
`