import { Avatar, Container, UnreadMessage } from "../common/common";
import { useRouter } from "next/router";
import { StyledChatMainContainer } from "./chat.common";
import { Plus, X } from "@phosphor-icons/react";
import { IconButton } from "../buttons";

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

export const BlockedChat = ({ user = {}, newBlocked = false }) => {
  return (
    <StyledChatMainContainer>
      <Container
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Container row center style={{ gap: 17 }}>
          {/* Profile image */}
          <Avatar size="2.8rem" />
          {/* name and last message */}
          <div>
            <div>{"ABCD"}</div>
            <div>{"About user"}</div>
          </div>
        </Container>
        {/* remove from blocked contact */}
        {newBlocked ? (
          <IconButton icon={<Plus size={22} />} noshadow />
        ) : (
          <IconButton icon={<X size={22} />} noshadow />
        )}
      </Container>
    </StyledChatMainContainer>
  );
};

export default Chat;
