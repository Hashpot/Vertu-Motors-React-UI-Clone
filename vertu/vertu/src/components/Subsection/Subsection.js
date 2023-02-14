import styled from "styled-components";
import { rem } from "polished";
import { Children } from "react";

const ExploreSectionContainer = styled.div`
  background-color: ${(props) => props.colour || "#1a1919"};

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  }
`;
const ExploreSectionImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;

  @media only screen and (min-width: 768px) {
    width: 50%;
    padding: ${rem(80)};
  }
`;

const ExploreSectionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  padding: ${rem(40)};

  @media only screen and (min-width: 768px) {
    padding: ${rem(200)};
  }
`;

const ExploreSectionHeading = styled.h1`
  color: black;
  margin: ${rem(40)} 0;
`;

const ExploreSectionText = styled.p`
  color: black;
`;

export const SectionButton = styled.button`
  background-color: #68e3d3;
  color: #1a1919;
  border: none;
  border-radius: 5px;
  padding: ${rem(20)};
  width: 100%;
  font-size: ${rem(20)};
  font-weight: 500;
  margin-top: ${rem(20)};

  :hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }

  @media only screen and (min-width: 768px) {
    padding: ${rem(10)};
    width: ${rem(300)};
  }
`;

const Subsection = (props) => {
  return (
    <ExploreSectionContainer colour={props.colour} reverse={props.reverse}>
      <ExploreSectionImage src={props.image} />
      <ExploreSectionInfoContainer>
        {props.children ? (
          props.children
        ) : (
          <>
            <ExploreSectionHeading>{props.header}</ExploreSectionHeading>
            <ExploreSectionText>{props.text}</ExploreSectionText>
            <SectionButton>Request a personalised video</SectionButton>
          </>
        )}
      </ExploreSectionInfoContainer>
    </ExploreSectionContainer>
  );
};

export default Subsection;
