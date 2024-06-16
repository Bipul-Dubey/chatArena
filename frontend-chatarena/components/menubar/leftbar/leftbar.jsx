import { IconButton } from "@/components/buttons";
import { Avatar, StyledHorizontalLine } from "@/components/common/common";
import { ChatCircleDots, Gear, Phone, Users } from "@phosphor-icons/react";
import styled from "styled-components";

const StyledLeftbarContainer = styled("div")(({}) => ({
  backgroundColor: "#F1F4FB",
  minWidth: "85px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "2px 2px 12px #8b8787, -2px -2px 12px #7d7a7a",
  minHeight: "100vh",
  "@media (min-height: 568px)": {
    height: "100vh",
  },
}));

const StyledImage = styled("img")(({}) => ({
  height: "50px",
  width: "50px",
  background: "transparent",
  margin: "17px 0px",
  objectFit: "contain",
}));

const StyledOptionContainer = styled("div")(({}) => ({
  margin: "20px 0px",
  display: "flex",
  flexDirection: "column",
  gap: 17,
}));

const StyledAlign = styled("div")(({ bottom = false }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  margin: bottom ? "40px 0px" : "",
  gap: bottom ? 9 : "",
}));

const Leftbar = ({ activeIndex = 0, setActiveIndex = () => {} }) => {
  return (
    <StyledLeftbarContainer>
      <StyledAlign>
        <StyledImage width={"50px"} height={"50%"} src="siteimage.png" />
        <StyledOptionContainer>
          <IconButton
            size="45px"
            icon={<ChatCircleDots size={"30px"} />}
            onClick={() => {
              setActiveIndex(0);
            }}
            isactive={activeIndex == 0}
          />
          <IconButton
            size="45px"
            icon={<Users size={"30px"} />}
            onClick={() => {
              setActiveIndex(1);
            }}
            isactive={activeIndex == 1}
          />
          <IconButton
            size="45px"
            icon={<Phone size={"30px"} />}
            onClick={() => {
              setActiveIndex(2);
            }}
            isactive={activeIndex == 2}
          />
          <StyledHorizontalLine />
          <IconButton
            size="45px"
            icon={<Gear size={"30px"} />}
            onClick={() => {
              setActiveIndex(3);
            }}
            isactive={activeIndex == 3}
          />
        </StyledOptionContainer>
      </StyledAlign>
      <StyledAlign bottom>
        <Avatar />
      </StyledAlign>
    </StyledLeftbarContainer>
  );
};

export default Leftbar;
