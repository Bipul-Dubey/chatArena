import { useState } from "react";
import { StyledMainChatContainer } from "../chats/chat.common";
import SelectFrom3 from "./SelectFrom3";

function LastSeen() {
  return (
    <StyledMainChatContainer>
      <SelectFrom3
        feature="Last Seen"
        message="If you don’t share your Last Seen, you won’t be able to see other
          people’s Last Seen"
        getUpdatedState={(data) => console.log(data)}
      />
    </StyledMainChatContainer>
  );
}

export default LastSeen;
