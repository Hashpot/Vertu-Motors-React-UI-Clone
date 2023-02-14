import React from "react";
import Navbar from "./components/navbar";
import Mainimg from "./Images/Mainimg.jpg";
//import Card from './Cards/CardUI';
import Cards from "./Cards/Cards";
import "./mainscreen.css";
import Box from "./explorepage";
import Blackbox from "./performancepage";

import styled from "styled-components";
import { rem } from "polished";

import feature1 from "./Images/Feature-01.jpg";
import feature2 from "./Images/Feature-02.jpg";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import MainSection from "./components/MainSection/MainSection";
import Carousel from "./components/Carousel/Carousel";
import Subsection, { SectionButton } from "./components/Subsection/Subsection";
import { CarouselItems } from "./components/Carousel/CarouselItems";

function App() {
  return (
    <>
      <NavigationBar />
      <MainSection
        header={"Explore the new BMW i4 range"}
        image={Mainimg}
        text={
          "From the cool Trend and SUV-inspired Active to the sporty ST-Line, the eighth generation Fiesta impresses across the range."
        }
        showButton
      />
      <Carousel title="BMW i4 trims" items={CarouselItems} />
      <Subsection
        reverse
        colour="#f2f2f2"
        header={"Explore the new BMW interior"}
        image={feature1}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        }
      />

      <Subsection image={feature2}>
        <h1 className="text1performance">
          Electrifying performance <br></br> with the BMW i4
        </h1>
        <h3 className="text2performance">
          From the cool Trend and SUV-inspired Active <br></br>
          to the sporty ST-Line
        </h3>
        <div class="flex-container">
          <div class="flex-child magenta">
            <p className="hrtext">02:05 hr</p>
            <h4 className="charging">
              Charging at home for a Range of 64 miles
            </h4>
          </div>

          <div class="flex-child green">
            <p className="numbertext">365</p>
            <p className="electric">Electric range in miles</p>
          </div>
        </div>

        <SectionButton>Book a test drive</SectionButton>
      </Subsection>

     
    </>
  );
}
export default App;
