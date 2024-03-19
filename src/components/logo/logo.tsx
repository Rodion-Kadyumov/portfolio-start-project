import { StyledLink } from "../../styles/StyledLink";
import { Icon } from "../icon/Icon";

export const Logo = () => {
  return (
    <StyledLink href="https://github.com/Rodion-Kadyumov">
      <Icon iconId={'git'} width={"70"} height={"70"} />
    </StyledLink>
  )
}