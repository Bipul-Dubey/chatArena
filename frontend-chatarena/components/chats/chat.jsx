import React from "react";
import styled from "styled-components";
import { Avatar, Container, UnreadMessage } from "../common/common";
import { useRouter } from "next/router";

const StyledChatMainContainer = styled("div")(({}) => ({
  backgroundColor: "#D0ECFA",
  padding: "10px 10px",
  minHeight: "max-content",
  borderRadius: 9,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  "&:hover": {
    cursor: "pointer",
  },
}));

const Chat = ({ user = {}, isactive = user?.isactive }) => {
  const router = useRouter();
  return (
    <StyledChatMainContainer
      onClick={() => {
        const chat = Math.random(0.1, 1) * 1;
        router.push({
          pathname: "/dashboard",
          query: { chat },
        });
      }}
    >
      <Container row center style={{ gap: 17 }}>
        {/* Profile image */}
        <Avatar size="2.8rem" isactive={isactive} status />
        {/* name and last message */}
        <div>
          <div>{"ABCD"}</div>
          <div>{"sefrgergre"}</div>
        </div>
      </Container>
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
