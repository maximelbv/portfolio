import { Link } from "react-router-dom";
import { navigation } from "../../constants/navigation";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.M_L};
  margin-right: ${({ theme }) => theme.spacing.S_XXXL};
  & a {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    background: ${({ theme }) => theme.colors};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        {navigation.map((nav) => (
          <Link to={nav.route}>{nav.name}</Link>
        ))}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
