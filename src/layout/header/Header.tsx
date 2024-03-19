import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../styles/Container";
import { FlexWrapper } from "../../styles/FlexWrapper";
import { myTheme } from "../../styles/Theme.styles";

const headerItems = ["Home", "Skills", "Works", "Testimony", "Contacts"]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <Menu menuItems={headerItems}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.9);
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;

  ${Container} {
    padding: 0 15px;
  }
  
  a:hover {
    box-sizing: borser-box;
    border: 1px solid #f00d0d;
    border-radius: 20px;
    padding: 5px 10px;
    background-color: #f00d0d;
    box-shadow: 0 0 20px #f00d0d, 0 0 40px #f00d0d, 0 0 80px #f00d0d;
  }
`