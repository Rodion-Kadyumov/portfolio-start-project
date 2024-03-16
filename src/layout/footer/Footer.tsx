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
        <StyledSpan>Rodion</StyledSpan>
        <StyledUnordered>
          <StyledList>
            <StyledLink>
              <Icon iconId={"telegramm"} />
            </StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>
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
  min-height: 20vh;
`

const Copyright = styled.small`

`