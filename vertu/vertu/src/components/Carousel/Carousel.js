import BootstrapCarousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { rem } from "polished";

import { useWindowWidth } from "@react-hook/window-size";

const CarouselContainer = styled.div`
  margin-top: ${rem(60)};
`;

const CarouselHeaderContainer = styled.div`
  text-align: left;
  margin: 0 ${rem(180)};
`;

const CarouselHeader = styled.h1`
  margin-bottom: ${rem(40)};
`;

const StyledCarousel = styled(BootstrapCarousel)`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const FlexWrapper = styled(BootstrapCarousel.Item)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${rem(30)};
  padding-bottom: ${rem(40)};

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const CustomCarouselNextButton = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: 50,
        width: 50,
        borderRadius: 50,
        border: "solid",
        borderColor: "black",
        borderWidth: 0.1,
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
      }}
    >
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="rotate(90)"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M19.9201 15.0501L13.4001 8.53014C12.6301 7.76014 11.3701 7.76014 10.6001 8.53014L4.08008 15.0501"
            stroke="#000000"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </div>
  );
};

const Carousel = (props) => {
  const windowWidth = useWindowWidth();

  return (
    <CarouselContainer>
      <CarouselHeaderContainer>
        <CarouselHeader>{props.title}</CarouselHeader>
      </CarouselHeaderContainer>
      <StyledCarousel
        indicators={false}
        interval={null}
        prevIcon={null}
        nextIcon={windowWidth <= 768 ? false : <CustomCarouselNextButton />}
      >
        {props?.items?.map((item, index) => {
          return (
            <StyledCarousel.Item key={index}>
              <FlexWrapper>{item}</FlexWrapper>
            </StyledCarousel.Item>
          );
        })}
      </StyledCarousel>
    </CarouselContainer>
  );
};

export default Carousel;
