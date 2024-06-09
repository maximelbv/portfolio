import { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { splitTextToHtmlChars } from "../../helpers/textHelper";

interface IProps {
  title: string;
  description: string;
}

const StyledHeader = styled.div`
  padding: 115px 0;
  display: flex;
  gap: ${({ theme }) => theme.spacing.S_XXS};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  & .title {
    display: flex;
    font-family: ${({ theme }) => theme.fonts.Quincy};
    font-weight: 500;
    margin-right: -${({ theme }) => theme.spacing.S_XXS};
    line-height: 30px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    & > * {
      margin-right: 0.5px;
      transform: translateY(${({ theme }) => theme.spacing.M_S});
    }
    font-size: 30px;
    transition: transform 0.5s;
  }
  & .description {
    font-size: ${({ theme }) => theme.fontSize.S_XXXL};
    color: ${({ theme }) => theme.colors.subtext};
    opacity: 0;
  }
`;

const ClassicHeroHeader = ({ title, description }: IProps) => {
  useEffect(() => {
    gsap.to(".char", {
      y: 0,
      ease: "power4.inOut",
      stagger: 0.015,
      duration: 0.7,
    });
    gsap.to(".description", {
      opacity: 1,
      ease: "power4.inOut",
      delay: 0.5,
      duration: 1,
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
