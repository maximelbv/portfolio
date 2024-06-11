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
      87.549% 11.826%,
      87.549% 11.826%,
      84.533% 8.959%,
      81.047% 6.57%,
      77.214% 4.621%,
      73.157% 3.073%,
      68.999% 1.887%,
      64.864% 1.026%,
      60.876% 0.451%,
      57.157% 0.122%,
      53.83% 0.002%,
      51.02% 0.053%,
      51.02% 0.053%,
      47.574% 0.141%,
      43.555% 0.427%,
      39.127% 0.944%,
      34.453% 1.726%,
      29.695% 2.805%,
      25.018% 4.214%,
      20.585% 5.987%,
      16.559% 8.155%,
      13.103% 10.753%,
      10.38% 13.814%,
      10.38% 13.814%,
      8.239% 17.223%,
      6.404% 20.794%,
      4.856% 24.449%,
      3.574% 28.111%,
      2.538% 31.704%,
      1.727% 35.15%,
      1.122% 38.372%,
      0.701% 41.293%,
      0.446% 43.836%,
      0.335% 45.924%,
      0.335% 45.924%,
      0.151% 47.882%,
      0.032% 50.284%,
      0.003% 53.062%,
      0.093% 56.148%,
      0.329% 59.472%,
      0.739% 62.966%,
      1.351% 66.561%,
      2.192% 70.189%,
      3.29% 73.782%,
      4.672% 77.27%,
      4.672% 77.27%,
      6.699% 81.207%,
      8.914% 84.532%,
      11.27% 87.31%,
      13.724% 89.607%,
      16.231% 91.49%,
      18.744% 93.024%,
      21.218% 94.275%,
      23.609% 95.31%,
      25.872% 96.194%,
      27.96% 96.994%,
      27.96% 96.994%,
      30.019% 97.657%,
      32.515% 98.227%,
      35.35% 98.708%,
      38.422% 99.102%,
      41.633% 99.41%,
      44.883% 99.635%,
      48.072% 99.779%,
      51.099% 99.844%,
      53.865% 99.833%,
      56.271% 99.747%,
      56.271% 99.747%,
      59.725% 99.43%,
      63.72% 98.791%,
      68.083% 97.789%,
      72.646% 96.384%,
      77.235% 94.537%,
      81.682% 92.207%,
      85.816% 89.355%,
      89.465% 85.942%,
      92.459% 81.927%,
      94.627% 77.27%,
      94.627% 77.27%,
      96.481% 71.272%,
      97.842% 65.765%,
      98.778% 60.763%,
      99.358% 56.279%,
      99.65% 52.327%,
      99.723% 48.921%,
      99.645% 46.075%,
      99.485% 43.802%,
      99.312% 42.116%,
      99.193% 41.031%,
      99.193% 41.031%,
      99.12% 39.933%,
      98.99% 38.243%,
      98.735% 36.033%,
      98.284% 33.371%,
      97.566% 30.328%,
      96.514% 26.972%,
      95.055% 23.375%,
      93.122% 19.605%,
      90.643% 15.732%,
      87.549% 11.826%
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
