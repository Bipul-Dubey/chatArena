import React from "react";
import { Container } from "../common/common";
import OpenLefBarHeader from "../common/OpenLeftbarHeader";
import { StyledMainChatContainer } from "../chats/chat.common";
import { CaretLeft } from "@phosphor-icons/react";
import { handleUpdateLeftBarSubType } from "@/store/services/app";

function RequestAccountInfo() {
  return (
    <StyledMainChatContainer>
      <OpenLefBarHeader
        name="Request Account Info"
        icon={<CaretLeft />}
        onClick={() => {
          handleUpdateLeftBarSubType("");
        }}
      />
      <Container></Container>
    </StyledMainChatContainer>
  );
}

export default RequestAccountInfo;
