import styled from "styled-components"
import { StyledSubTitle } from "../../../styles/StyledSubTitle"
import { StyledForm } from "../../../styles/StyledForm"
import { StyledInput } from "../../../styles/StyledInput"
import { StyledBtn } from "../../../styles/StyledBtn"
import { Container } from "../../../styles/Container"

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <StyledSubTitle>Contact</StyledSubTitle>
        <StyledForm>
          <StyledInput placeholder={"Name"} />
          <StyledInput placeholder={"Subject"} />
          <StyledInput as={"textarea"}/>
          <StyledBtn type={"submit"}>Send Messege</StyledBtn>
        </StyledForm>
      </Container>
    </StyledContact>
  )
}

const StyledContact = styled.section`
  
`