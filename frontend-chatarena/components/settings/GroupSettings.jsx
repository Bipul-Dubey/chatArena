import React from "react";
import { StyledMainChatContainer } from "../chats/chat.common";
import SelectFrom3 from "./SelectFrom3";

function GroupSetting() {
  return (
    <StyledMainChatContainer>
      <SelectFrom3
        feature="Groups"
        message="Who can add me to group"
        getUpdatedState={(data) => console.log(data)}
      />
    </StyledMainChatContainer>
  );
}

export default GroupSetting;
