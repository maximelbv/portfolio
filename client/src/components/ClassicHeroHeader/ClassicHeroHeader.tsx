import { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { splitTextToHtmlChars } from "../../helpers/textHelper";

interface IProps {
  title: string;
  description: string;
}

const StyledHeader = styled.div`
  padding: 140px 0;
  display: flex;
  gap: ${({ theme }) => theme.spacing.S_M};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  & .title {
    display: flex;
    font-family: ${({ theme }) => theme.fonts.Quincy};
    font-weight: 500;
    margin-right: -${({ theme }) => theme.spacing.M_XXS};
    line-height: ${({ theme }) => theme.spacing.M_S};
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    & > * {
      margin-right: ${({ theme }) => theme.spacing.M_XXS};
      transform: translateY(${({ theme }) => theme.spacing.M_S});
    }
    font-size: ${({ theme }) => theme.fontSize.XL};
    text-transform: uppercase;
    transition: transform 0.5s;
  }
  & .description {
    color: ${({ theme }) => theme.colors.subtext};
    opacity: 0;
  }
`;

const ClassicHeroHeader = ({ title, description }: IProps) => {
  useEffect(() => {
    gsap.to(".char", {
      y: 0,
      ease: "power4.inOut",
      stagger: 0.05,
      duration: 1,
    });
    gsap.to(".description", {
      opacity: 1,
      ease: "power4.inOut",
      delay: 0.6,
      duration: 2.5,
    });
  }, []);

  return (
    <StyledHeader>
      <div className="title">{splitTextToHtmlChars(title)}</div>
      <span className="description">{description}</span>
    </StyledHeader>
  );
};

export default ClassicHeroHeader;
