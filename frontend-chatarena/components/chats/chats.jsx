import styled from "styled-components";
import {
  Container,
  StyledHorizontalLine,
  TextField,
  Typography,
} from "../common/common";
import { BoxArrowDown, CircleDashed } from "@phosphor-icons/react";
import { IconButton } from "../buttons";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Chat from "./chat";

const StyledMainChatContainer = styled("div")(({}) => ({
  backgroundColor: "#F8FAFF",
  minWidth: "350px",
  "@media (max-width: 768px)": {
    width: "100%",
  },
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  minHeight: "500px",
}));

const StyledTopContainer = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "row",
  margin: 17,
  justifyContent: "space-between",
  alignItems: "baseline",
}));

const StyledChatContainer = styled("div")(
  ({ row = false, center = false }) => ({
    display: "flex",
    flexDirection: row ? "row" : "column",
    justifyContent: center ? "center" : "",
    alignItems: center ? "center" : "",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.5px",
    },
    "&:hover": {
      "&::-webkit-scrollbar": {
        width: "5px",
      },
    },
  })
);

const Chats = ({}) => {
  return (
    <StyledMainChatContainer>
      <StyledTopContainer>
        <Typography type="h2">Chats</Typography>
        <IconButton noshadow icon={<CircleDashed size={24} />} />
      </StyledTopContainer>
      <Container style={{ margin: "0px 7px" }}>
        <TextField
          iconStart={<MagnifyingGlass size={24} />}
          placeholder="Search"
        />
      </Container>
      <Container
        row
        style={{
          margin: "20px 7px",
          alignItems: "center",
          gap: 27,
        }}
      >
        <BoxArrowDown size={20} />{" "}
        <Typography type="h5" link>
          Archived
        </Typography>
      </Container>
      <Container center>
        <StyledHorizontalLine width="90%" />
      </Container>
      <StyledChatContainer
        style={{
          gap: 9,
          margin: "17px 7px",
        }}
      >
        {"123hdnfdsnfansdmfasdfnmasdnfmasdsdfsdfnsdkfnsk"
          ?.split("")
          ?.map((item, index) => (
            <Chat user={item} isactive={index % 2 == 0} />
          ))}
      </StyledChatContainer>
    </StyledMainChatContainer>
  );
};

export default Chats;