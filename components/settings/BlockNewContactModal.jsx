import React from "react";
import ModalContainer from "../common/top.components/ModalContainer";
import { Container, TextField } from "../common/common";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { BlockedChat } from "../chats/chat";
import { StyledChatContainer } from "../chats/chat.common";

function BlockNewContactModal({}) {
  return (
    <ModalContainer title="Block New Contact" scrollable>
      <Container
        style={{
          gap: 20,
          maxHeight: "100%",
        }}
      >
        <Container>
          <TextField
            iconStart={<MagnifyingGlass size={24} />}
            placeholder="Search"
          />
        </Container>
        <StyledChatContainer
          style={{
            gap: 9,
            margin: "17px 7px",
            overflowY: "auto",
          }}
        >
          {"123hdnsdfkjdfngkjdfgkddsnvkjnskjdnfkjdsnkj"
            ?.split("")
            ?.map((item, index) => (
              <BlockedChat user={item} newBlocked key={index} />
            ))}
        </StyledChatContainer>
      </Container>
    </ModalContainer>
  );
}

export default BlockNewContactModal;
