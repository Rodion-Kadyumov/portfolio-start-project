import { StyledLink } from "../../styles/StyledLink";
import { StyledList, StyledNavigation, StyledUnordered } from "../../styles/StyledNavigation";


export const Menu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledNavigation>
      <StyledUnordered>
        {props.menuItems.map((item, index) => {
          return <StyledList key={index}>
            <StyledLink href="">{item}</StyledLink>
          </StyledList>
        })}
      </StyledUnordered>
    </StyledNavigation>
  );
}