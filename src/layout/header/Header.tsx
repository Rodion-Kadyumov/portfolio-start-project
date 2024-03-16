import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "../../components/menu/Menu";

const headerItems = ["Home", "Skills", "Works", "Testimony", "Contacts"]

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={headerItems}/>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`