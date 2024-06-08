import { Link } from "react-router-dom";
import { navigation } from "../../constants/navigation";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.M_XXS};
`;

const StyledNav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.S_XXXL};
`;

const Header = () => {
  return (
    <StyledHeader>
      <p>Logo placeholder</p>
      <StyledNav>
        {navigation.map((nav) => (
          <Link to={nav.route}>{nav.name}</Link>
        ))}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
