import { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Carousel = () => {
  useEffect(() => {
    gsap.to(".ellipse", {
      y: 0,
      ease: "power3.out",
      stagger: 0.1,
      duration: 1.5,
    });
    gsap.to(".carouselCtn", {
      x: -1000,
      ease: "linear",
      stagger: 0.1,
      delay: 0.6,
      repeat: -1,
      duration: 20,
    });
  }, []);

  const StyledCarouselCtn = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.M_M};
    position: absolute;
  `;

  const StyledEllipse = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: white;
    transform: translateY(65svh);
    height: 450px;
    width: 300px;
    background: ${({ theme }) => theme.colors.subtext};
    clip-path: polygon(
      86.366% 11.79%,
      86.366% 11.79%,
      83.391% 8.932%,
      79.952% 6.55%,
      76.17% 4.607%,
      72.168% 3.063%,
      68.067% 1.882%,
      63.988% 1.023%,
      60.053% 0.449%,
      56.384% 0.122%,
      53.103% 0.002%,
      50.33% 0.052%,
      50.33% 0.052%,
      47.035% 0.143%,
      43.344% 0.438%,
      39.359% 0.971%,
      35.18% 1.775%,
      30.908% 2.884%,
      26.646% 4.332%,
      22.494% 6.151%,
      18.553% 8.376%,
      14.925% 11.04%,
      11.712% 14.177%,
      11.712% 14.177%,
      9.175% 17.427%,
      7.03% 20.876%,
      5.248% 24.443%,
      3.798% 28.044%,
      2.648% 31.598%,
      1.767% 35.022%,
      1.126% 38.236%,
      0.693% 41.155%,
      0.438% 43.699%,
      0.33% 45.784%,
      0.33% 45.784%,
      0.149% 47.736%,
      0.031% 50.131%,
      0.003% 52.9%,
      0.091% 55.976%,
      0.324% 59.29%,
      0.729% 62.774%,
      1.332% 66.358%,
      2.162% 69.975%,
      3.245% 73.557%,
      4.609% 77.034%,
      4.609% 77.034%,
      6.609% 80.96%,
      8.793% 84.274%,
      11.118% 87.044%,
      13.539% 89.334%,
      16.011% 91.211%,
      18.49% 92.74%,
      20.932% 93.988%,
      23.29% 95.02%,
      25.522% 95.901%,
      27.582% 96.699%,
      27.582% 96.699%,
      29.468% 97.366%,
      31.537% 97.954%,
      33.753% 98.462%,
      36.08% 98.889%,
      38.481% 99.233%,
      40.92% 99.495%,
      43.361% 99.672%,
      45.767% 99.766%,
      48.102% 99.774%,
      50.33% 99.695%,
      50.33% 99.695%,
      53.762% 99.531%,
      57.784% 99.296%,
      62.245% 98.87%,
      66.993% 98.137%,
      71.876% 96.977%,
      76.744% 95.273%,
      81.444% 92.905%,
      85.824% 89.756%,
      89.732% 85.707%,
      93.018% 80.64%,
      93.018% 80.64%,
      95.432% 75.286%,
      97.195% 69.941%,
      98.398% 64.715%,
      99.133% 59.72%,
      99.493% 55.068%,
      99.569% 50.87%,
      99.454% 47.238%,
      99.238% 44.284%,
      99.014% 42.119%,
      98.874% 40.854%,
      98.874% 40.854%,
      98.773% 39.76%,
      98.568% 38.08%,
      98.201% 35.882%,
      97.617% 33.236%,
      96.759% 30.209%,
      95.569% 26.872%,
      93.992% 23.292%,
      91.97% 19.54%,
      89.447% 15.683%,
      86.366% 11.79%
    );

    &:hover {
      /* clip-path: ; */
    }
  `;

  return (
    <StyledCarouselCtn className="carouselCtn">
      <StyledEllipse className="ellipse">1</StyledEllipse>
      <StyledEllipse className="ellipse">2</StyledEllipse>
      <StyledEllipse className="ellipse">3</StyledEllipse>
      <StyledEllipse className="ellipse">4</StyledEllipse>
      <StyledEllipse className="ellipse">5</StyledEllipse>
      <StyledEllipse className="ellipse">6</StyledEllipse>
      <StyledEllipse className="ellipse">7</StyledEllipse>
      <StyledEllipse className="ellipse">8</StyledEllipse>
    </StyledCarouselCtn>
  );
};

export default Carousel;
