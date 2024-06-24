import React from "react";
import {
  StyledChatContainer,
  StyledMainChatContainer,
  StyledTopContainer,
} from "./chat.common";
import { Container, TextField, Typography } from "../common/common";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Call from "./call";

const CallLogs = ({}) => {
  return (
    <StyledMainChatContainer>
      <StyledTopContainer>
        <Typography type="h2">Call Logs</Typography>
      </StyledTopContainer>
      <Container style={{ margin: "0px 7px" }}>
        <TextField
          iconStart={<MagnifyingGlass size={24} />}
          placeholder="Search"
        />
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
            <Call
              user={item}
              isactive={index % 2 == 0}
              callType={index % 2 == 0 ? "success outgoing" : "failed incoming"}
            />
          ))}
      </StyledChatContainer>
    </StyledMainChatContainer>
  );
};

export default CallLogs;
