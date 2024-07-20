import styled from "styled-components";
import {
  Avatar,
  Marquee,
  StyledVerticalLine,
  Typography,
} from "../common/common";
import {
  CaretDown,
  MagnifyingGlass,
  Phone,
  VideoCamera,
} from "@phosphor-icons/react";
import { IconButton } from "../buttons";
import { handleToggleSidebar } from "@/store/services/app";

const StyledHeaderContainer = styled("div")(({}) => ({
  height: "70px",
  backgroundColor: "#eef0f5",
  display: "flex",
  alignItems: "center",
  padding: "17px",
  gap: 7,
  justifyContent: "space-between",
}));

const Header = ({}) => {
  return (
    <StyledHeaderContainer>
      {/* profile area */}
      <div style={{ display: "flex", alignItems: "center", gap: 17 }}>
        <Avatar
          onClick={() => {
            handleToggleSidebar();
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography type="h5">
            <Marquee>Pink Panda Animal</Marquee>
          </Typography>
          <Typography>offline</Typography>
        </div>
      </div>

      {/* call, video call, search section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <IconButton icon={<VideoCamera size={24} />} noshadow />
        <IconButton icon={<Phone size={24} />} noshadow />
        <IconButton icon={<MagnifyingGlass size={24} />} noshadow />
        <StyledVerticalLine />
        <IconButton icon={<CaretDown size={24} />} noshadow />
      </div>
    </StyledHeaderContainer>
  );
};

export default Header;
