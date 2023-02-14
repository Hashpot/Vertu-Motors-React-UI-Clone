import styled from "styled-components";
import { rem } from "polished";

import logo from "../../Images/logovertu.jpg";
import location from "../../Images/location.png";
import person from "../../Images/person.png";
import love from "../../Images/love.png";
import search from "../../Images/search.png";
import micro from "../../Images/microphone.jpg";

import Dropdown from "../Dropdown/Dropdown";

const NavBarContainer = styled.div`
  width: 100%;
  background-color: white;
  height: ${rem(100)};
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    justify-content: center;
  }
`;

const BurgerMenuContainer = styled.div`
  height: 100%;
  width: ${rem(100)};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const LogoContainer = styled.div`
  height: 100%;
  width: auto;
`;

const LogoImage = styled.img`
  height: 100%;
  width: 100%;
`;

const MobileMenuItemsContainer = styled.div`
  height: 100%;
  width: ${rem(300)};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const DesktopMenuItemsContainer = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    gap: ${rem(30)};
    justify-content: center;
    align-items: center;
  }
`;

const DesktopMenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.p`
  margin-bottom: 0px;
`;

const SearchContainer = styled.div`
  display: none;
  position: relative;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: "space-between";
  }
`;

const SearchInput = styled.input`
  width: ${rem(300)};
  height: ${rem(50)};
  border-radius: 20px;
  border-style: solid;
  border-color: transparent;
  background-color: #e8e8e8;
  padding: ${rem(20)} ${rem(30)};
`;

const SearchInputIcon = styled.img`
  height: ${rem(20)};
  width: ${rem(20)};
  position: absolute;
  bottom: 8px;
  left: 5px;
`;

const MicroInputIcon = styled.svg`
  height: ${rem(25)};
  width: ${rem(25)};
  position: absolute;
  bottom: 8px;
  right: 5px;
`;

const MenuItemImage = styled.img``;

const burgerSvg = (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 12 12"
    enableBackground="new 0 0 12 12"
    id="Слой_1"
    version="1.1"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="5.5"></rect>
        <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="2.5"></rect>
        <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="8.5"></rect>
      </g>
    </g>
  </svg>
);

const menuItemImages = [search, love, person, location];

const desktopMenuItems = [
  { image: search, text: "Find us" },
  { image: location, text: "Save" },
  { image: person, text: "Log in" },
];

const desktopDropdownItemTitles = [
  "New cars",
  "Used cars",
  "Servicing",
  "Commercials",
  "Motability",
];

const NavigationBar = () => {
  return (
    <NavBarContainer>
      <BurgerMenuContainer>{burgerSvg}</BurgerMenuContainer>
      <LogoContainer>
        <LogoImage src={logo} />
      </LogoContainer>
      <DesktopMenuItemsContainer>
        {desktopDropdownItemTitles?.map((dropdownItemTitle) => {
          return <Dropdown key={dropdownItemTitle} title={dropdownItemTitle} />;
        })}
        <SearchContainer>
          <SearchInput placeholder={"Search: Make, model or location"} />
          <SearchInputIcon src={search} />
          <MicroInputIcon
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M9.5 10.5V6.5C9.5 5.11929 10.6193 4 12 4C13.3807 4 14.5 5.11929 14.5 6.5V10.5C14.5 11.8807 13.3807 13 12 13C10.6193 13 9.5 11.8807 9.5 10.5Z"
                fill="#000000"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M7.5 14C8.11508 16.1869 9.8033 17.5 12 17.5M12 17.5C14.1967 17.5 15.8849 16.1869 16.5 14M12 17.5V21"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </MicroInputIcon>
        </SearchContainer>

        {desktopMenuItems?.map((desktopMenuItem) => {
          return (
            <DesktopMenuItem>
              <MenuItemImage
                src={desktopMenuItem?.image}
                height={30}
                width={30}
              />
              <Label>{desktopMenuItem?.text}</Label>
            </DesktopMenuItem>
          );
        })}
      </DesktopMenuItemsContainer>
      <MobileMenuItemsContainer>
        {menuItemImages?.map((menuItemImage) => {
          return <MenuItemImage height={30} width={30} src={menuItemImage} />;
        })}
      </MobileMenuItemsContainer>
    </NavBarContainer>
  );
};

export default NavigationBar;
