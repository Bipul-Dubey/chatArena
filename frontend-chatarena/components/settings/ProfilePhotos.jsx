import React from "react";
import { StyledMainChatContainer } from "../chats/chat.common";
import SelectFrom3 from "./SelectFrom3";

function ProfilePhotos() {
  return (
    <StyledMainChatContainer>
      <SelectFrom3
        feature="Profile Photos"
        message="Who can see my profile photo"
        getUpdatedState={(data) => console.log(data)}
      />
    </StyledMainChatContainer>
  );
}

export default ProfilePhotos;
