import styled from "styled-components";
import { rem } from "polished";

const MainSectionContainer = styled.div`
  width: 100%;
  padding: 0px;
  position: relative;


  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const MainSectionImage = styled.img`
  width: 100%;
  height: "auto";
  @media only screen and (min-width: 768px) {
    position: relative;
    z-index: -200;
  }
`;


const InfoContainer = styled.div`
  background-color: ${(props) => props.colour || "#1a1919"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${rem(20)};
  padding: ${rem(40)};
  text-align: center;

  color: ${(props) => props.textColour || "white"};

  @media only screen and (min-width: 768px) {
    text-align: left;
    background-color: transparent;
    align-items: flex-start;
    width: ${rem(500)};
    position: absolute;
    margin-left: ${rem(150)};
  }
`;

const InfoHeader = styled.h1``;

const InfoText = styled.p`
  font-size: ${rem(20)};
`;

const SectionButton = styled.button`
  background-color: #68e3d3;
  color: #1a1919;
  border: none;
  border-radius: 5px;
  padding: ${rem(20)};
  margin-top: ${rem(20)};
  width: 100%;
  font-size: ${rem(20)};
  font-weight: 500;

  :hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  @media only screen and (min-width: 768px) {
    padding: ${rem(10)};
    width: ${rem(200)};
  }
`;

const MainSection = (props) => {
  return (
    <MainSectionContainer>
      <MainSectionImage src={props.image} />
      <InfoContainer colour={props.colour} textColour={props.textColour}>
        <InfoHeader>{props.header}</InfoHeader>
        <InfoText>{props.text}</InfoText>
        {props.showButton && <SectionButton>Book a test drive</SectionButton>}
      </InfoContainer>
    </MainSectionContainer>
  );
};

export default MainSection;
