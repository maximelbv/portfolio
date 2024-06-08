import styled from "styled-components";

interface IProps {
  title: string;
  description: string;
}

const StyledHeader = styled.div`
  & h1 {
    ${({ theme }) => theme.fonts.Quincy}
  }
`;

const ClassicHeroHeader = ({ title, description }: IProps) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <span>{description}</span>
    </StyledHeader>
  );
};

export default ClassicHeroHeader;
