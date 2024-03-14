import styled from "styled-components"
import { StyledSpan } from "../../styles/StyledSpan"
import { Icon } from "../../components/icon/Icon"

export const Footer = () => {
  <StyledFooter>
    <StyledSpan>Rodion</StyledSpan>
    <Icon iconId={"git"} />
    <Icon iconId={"git"} />
    <Icon iconId={"git"} />
    <Icon iconId={"git"} />
    <StyledSpan>© 2024 Rodion Kaduymov, All Rights Reserved.</StyledSpan>
  </StyledFooter>
}

const StyledFooter = styled.footer`
`