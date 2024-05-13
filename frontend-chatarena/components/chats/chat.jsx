import React from "react";
import styled from "styled-components";
import { Avatar, UnreadMessage } from "../common/common";
import { faker } from "@faker-js/faker";

const StyledChatMainContainer = styled("div")(({}) => ({
  backgroundColor: "#D0ECFA",
  padding: "10px 10px",
  minHeight: "max-content",
  borderRadius: 9,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const Chat = () => {
  return (
    <StyledChatMainContainer>
      <div style={{ display: "flex", gap: 21, alignItems: "center" }}>
        {/* Profile image */}
        <Avatar size="2.8rem" />
        {/* name and last message */}
        <div>
          <div>{faker.person.fullName()}</div>
          <div>{faker.music.songName()}</div>
        </div>
      </div>
      {/* last message time and unread message */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <div>00:00</div>
        <UnreadMessage
          unread={11}
          size={"10px"}
          color="#D0ECFA"
          backgroundColor="#1167e8"
        />
      </div>
    </StyledChatMainContainer>
  );
};

export default Chat;
