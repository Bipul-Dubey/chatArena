import React from "react";
import { StyledMainChatContainer } from "../chats/chat.common";
import OpenLefBarHeader from "../common/OpenLeftbarHeader";
import { handleUpdateLeftBarSubType } from "@/store/services/app";
import { Container } from "../common/common";
import { CaretLeft } from "@phosphor-icons/react";
import { LEFT_BAR } from "@/constants/appConstant";

function BlockedContact() {
  return (
    <StyledMainChatContainer>
      <OpenLefBarHeader
        name="Blocked Contact"
        icon={<CaretLeft />}
        onClick={() => {
          handleUpdateLeftBarSubType(LEFT_BAR.SETTING_SUB_TYPE.PRIVACY);
        }}
      />
      <Container></Container>
    </StyledMainChatContainer>
  );
}

export default BlockedContact;