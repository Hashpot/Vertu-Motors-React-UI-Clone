import React, { useState } from "react";
import Card from "./CardUI";
import img1 from "../Images/Trim-01.jpg";
import img2 from "../Images/Trim-02.jpg";
import img3 from "../Images/Trim-03.jpg";
import "./card-style.css";
import Carousel from "react-bootstrap/Carousel";

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

const Cards = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ padding: 40 }}>
      <div className="row">
        <div className="bmw-text">
          <p>BMW i4 Trims</p>
        </div>
        <Carousel
          variant="dark"
          activeIndex={index}
          onSelect={handleSelect}
          nextIcon={<CustomCarouselNextButton />}
          prevIcon={null}
          indicators={false}
        >
          <Carousel.Item>
            <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
              <Card
                imgsrc={img1}
                title="M 50"
                titletwo="From, £65,795"
                titlethree={"Velour floor mats"}
                bulletPoints={[
                  "Velour floor mats",
                  "Sun protection glass",
                  "Automatic Stability Control (ASC)",
                  "Adaptive M suspension",
                  "Storage for wireless charging",
                  "Cruise control with brake assist",
                  "Automatic tailgate operation",
                ]}
              />

              <Card
                imgsrc={img2}
                title="M Sport"
                titletwo="From, £54,980"
                bulletPoints={[
                  "Velour floor mats",
                  "Rain sensor including auto headlights activation",
                  "Automatic Stability Control (ASC)",
                  "Standard Suspension",
                  "Electric Power Steering (EPS) with Servotronic",
                  "Automatic tailgate operation",
                ]}
              />

              <Card
                imgsrc={img3}
                title="Sport"
                titletwo="From, £53,480"
                bulletPoints={[
                  "Velour floor mats",
                  "Rain sensor including auto headlights activation",
                  "Automatic Stability Control (ASC)",
                  "Standard Suspension",
                  "Electric Power Steering (EPS) with Servotronic",
                  "Automatic tailgate operation",
                ]}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
              <Card
                imgsrc={img1}
                title="M 50"
                titletwo="From, £65,795"
                titlethree={"Velour floor mats"}
                bulletPoints={[
                  "Velour floor mats",
                  "Sun protection glass",
                  "Automatic Stability Control (ASC)",
                  "Adaptive M suspension",
                  "Storage for wireless charging",
                  "Cruise control with brake assist",
                  "Automatic tailgate operation",
                ]}
              />

              <Card
                imgsrc={img2}
                title="M Sport"
                titletwo="From, £54,980"
                bulletPoints={[
                  "Velour floor mats",
                  "Rain sensor including auto headlights activation",
                  "Automatic Stability Control (ASC)",
                  "Standard Suspension",
                  "Electric Power Steering (EPS) with Servotronic",
                  "Automatic tailgate operation",
                ]}
              />

              <Card
                imgsrc={img3}
                title="Sport"
                titletwo="From, £53,480"
                bulletPoints={[
                  "Velour floor mats",
                  "Rain sensor including auto headlights activation",
                  "Automatic Stability Control (ASC)",
                  "Standard Suspension",
                  "Electric Power Steering (EPS) with Servotronic",
                  "Automatic tailgate operation",
                ]}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Cards;
