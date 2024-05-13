import { IconButton } from "@/components/buttons";
import { Avatar, StyledHorizontalLine } from "@/components/common/common";
import { ChatCircleDots, Gear, Phone, Users } from "@phosphor-icons/react";
import styled from "styled-components";

const StyledLeftbarContainer = styled("div")(({}) => ({
  backgroundColor: "#F1F4FB",
  width: "85px",
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

const Leftbar = () => {
  return (
    <StyledLeftbarContainer>
      <StyledAlign>
        <StyledImage src="siteimage.png" />
        <StyledOptionContainer>
          <IconButton size="45px" icon={<ChatCircleDots size={"30px"} />} />
          <IconButton size="45px" icon={<Users size={"30px"} />} />
          <IconButton size="45px" icon={<Phone size={"30px"} />} />
          <StyledHorizontalLine />
          <IconButton size="45px" icon={<Gear size={"30px"} />} />
        </StyledOptionContainer>
      </StyledAlign>
      <StyledAlign bottom>
        <Avatar />
      </StyledAlign>
    </StyledLeftbarContainer>
  );
};

export default Leftbar;
