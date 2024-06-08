import styled from "styled-components";

interface IProps {
  title: string;
  description: string;
}

const StyledHeader = styled.div`
  padding: 140px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  & h1 {
    font-family: ${({ theme }) => theme.fonts.Quincy};
    font-weight: 500;
    letter-spacing: ${({ theme }) => theme.spacing.M_XXS};
    margin-right: -${({ theme }) => theme.spacing.M_XXS};
    text-transform: uppercase;
  }
  & span {
    color: ${({ theme }) => theme.colors.subtext};
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
