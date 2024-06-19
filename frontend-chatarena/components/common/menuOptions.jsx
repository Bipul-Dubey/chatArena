import { DotsThreeVertical } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MenuContainer = styled("div")(({}) => ({
  position: "relative",
  display: "inline-block",
}));

const MenuOptions = styled("div")(({ show, position }) => ({
  display: show ? "block" : "none",
  position: "absolute",
  backgroundColor: "white",
  minWidth: "min-content",
  maxWidth: "150px",
  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
  zIndex: 1,
  borderRadius: "5px",
  overflow: "hidden",
  right: position == "right" ? 0 : "unset",
  left: position == "left" ? 0 : "unset",
  bottom: position == "bottom" ? 0 : "unset",
  top: position == "top" ? 0 : "unset",
}));

const MenuOption = styled("div")(({}) => ({
  color: "black",
  padding: "12px 16px",
  textDecoration: "none",
  display: "block",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#ddd",
  },
}));

// Menu component
const Menu = ({ options, show, onOptionClick, position }) => {
  return (
    <MenuContainer>
      <MenuOptions show={show} position={position}>
        {options?.map((option, index) => (
          <MenuOption key={index} onClick={() => onOptionClick(option?.func)}>
            {option?.name}
          </MenuOption>
        ))}
      </MenuOptions>
    </MenuContainer>
  );
};

export const Options = ({ children, options = [], position = "right" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleOptionClick = (func) => {
    const response = func();
    if (response) {
      setIsMenuOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} onClick={handleMenuOpen}>
      <Menu
        options={options}
        show={isMenuOpen}
        onOptionClick={handleOptionClick}
        position={position}
      />
      {children}
    </div>
  );
};
