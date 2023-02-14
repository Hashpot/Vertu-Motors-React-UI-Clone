import React from "react";
import "./card-style.css";
import styled from "styled-components";
import { rem } from "polished";

const CardBody = styled.div`
  background-color: white;
  border-radius: 20px;
  width: ${rem(600)};
  height: ${rem(800)};
  padding: ${rem(40)};

  -webkit-box-shadow: 7px 6px 26px -14px rgba(0, 0, 0, 0.82);
  -moz-box-shadow: 7px 6px 26px -14px rgba(0, 0, 0, 0.82);
  box-shadow: 7px 6px 26px -14px rgba(0, 0, 0, 0.82);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;

  :hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }
`;

const Card = (props) => {
  return (
    <>
      <CardBody>
        <div className="overflow">
          <CardImage src={props.imgsrc} alt="Image 1" />
        </div>
        <div>
          <h4 className="card-title"> {props.title}</h4>
          <p className="cardnew">{props.titletwo} </p>
          {props?.bulletPoints?.map((bulletpoint) => {
            return (
              <li key={bulletpoint} className="points">
                {bulletpoint}
              </li>
            );
          })}
        </div>
      </CardBody>
    </>
  );
};

export default Card;
