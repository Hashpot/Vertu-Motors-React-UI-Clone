import { useState } from "react";
import styled from "styled-components";
import { rem } from "polished";

const downArrowSvg = (
  <svg
    width={rem(20)}
    height={rem(20)}
    viewBox="0 0 1024 1024"
    className="icon"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
        fill="#000000"
      ></path>
    </g>
  </svg>
);

const upArrow = (
  <svg
    width={rem(20)}
    height={rem(20)}
    viewBox="0 0 1024 1024"
    className="icon"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    transform="rotate(180)"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
        fill="#000000"
      ></path>
    </g>
  </svg>
);

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
  gap: ${rem(10)};
  position: relative;
  cursor: pointer;
`;

const DropdownTitle = styled.p`
  font-size: ${rem(20)};
  font-weight: 600;
  margin: 0;
`;

const dropdownItems = ["test", "test2", "test3", "test4"];

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownContainer
      onClick={() => setOpen(!open)}
      onMouseOver={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <DropdownTitle>{props.title}</DropdownTitle>
      {open ? upArrow : downArrowSvg}

      <div>
        {open && (
          <ul
            style={{
              position: "absolute",
              zIndex: 100,
              left: 0,
              top: 18,
              width: "100%",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              justifyContent: "center",
              padding: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            {dropdownItems?.map((dropdownItem) => {
              return <li key={dropdownItem}>{dropdownItem}</li>;
            })}
          </ul>
        )}
      </div>
    </DropdownContainer>
  );
};

export default Dropdown;
