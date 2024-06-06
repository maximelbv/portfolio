import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainLayout = () => {
  const StyledMainLayoutContent = styled.div`
    min-height: 100vh;
    min-width: 100%;
  `;

  return (
    <div>
      <StyledMainLayoutContent>
        <Outlet />
      </StyledMainLayoutContent>
    </div>
  );
};

export default MainLayout;
