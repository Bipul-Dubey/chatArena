import { Avatar, Container, Typography } from "../common/common";
import { StyledChatMainContainer } from "./chat.common";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
  VideoCamera,
} from "@phosphor-icons/react";

const Call = ({
  user = {},
  isactive = user?.isactive,
  callType = "success outgoing",
}) => {
  return (
    <StyledChatMainContainer style={{ cursor: "default" }}>
      <Container row center style={{ gap: 17 }}>
        {/* Profile image */}
        <Avatar size="2.8rem" isactive={isactive} status />
        {/* name and last message */}
        <div>
          <Typography bold>{"ABCD"}</Typography>
          <div style={{ display: "flex", gap: 5 }}>
            <div>
              {(() => {
                switch (callType?.toLowerCase()) {
                  case "success outgoing":
                    return <ArrowUpRight size={20} color="#0a9335" />;
                  case "failed outgoing":
                    return <ArrowUpRight size={20} color="#93180a" />;
                  case "success incoming":
                    return <ArrowDownLeft size={20} color="#0a9335" />;
                  case "failed incoming":
                    return <ArrowDownLeft size={20} color="#93180a" />;
                  default:
                    break;
                }
              })()}
            </div>
            <Typography>{"Yesterday 10:45"}</Typography>
          </div>
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
        {isactive ? (
          <Phone size={22} color="#0a9335" />
        ) : (
          <VideoCamera size={22} color="#0a9335" />
        )}
      </div>
    </StyledChatMainContainer>
  );
};

export default Call;
