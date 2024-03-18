import styled from "styled-components"
import { StyledSpan } from "../../styles/StyledSpan"
import { Icon } from "../../components/icon/Icon"
import { StyledList, StyledUnordered } from "../../styles/StyledNavigation"
import { StyledLink } from "../../styles/StyledLink"
import { FlexWrapper } from "../../styles/FlexWrapper"

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <StyledSpan font={"Josefin Sans, sans serif"} color={"#FFFFFF"}>Rodion</StyledSpan>
        <StyledUnordered>
          <StyledList>
            <StyledLink href="https://telegram.me/@TempusPraeceps">
              <Icon iconId={"telegramm"} width="50" />
            </StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink href="https://vk.com/antaresr">
              <Icon iconId={"vk"} />
            </StyledLink>
          </StyledList>
        </StyledUnordered>
        <Copyright>© 2024 Rodion Kaduymov, All Rights Reserved.</Copyright>
      </FlexWrapper>
  </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: rgba(31, 31, 32, 0.9);
  padding: 40px 0;
  ul {
    margin: 30px 0;
  }
`

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0,5;
  color: #FFFFFF;
`