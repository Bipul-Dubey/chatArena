import React from "react";
import {
  StyledChatContainer,
  StyledMainChatContainer,
} from "../chats/chat.common";
import OpenLefBarHeader from "../common/OpenLeftbarHeader";
import { handleUpdateLeftBarSubType } from "@/store/services/app";
import {
  Container,
  StyledHorizontalLine,
  TextField,
  Typography,
} from "../common/common";
import { CaretLeft, MagnifyingGlass, X } from "@phosphor-icons/react";
import { LEFT_BAR } from "@/constants/appConstant";
import { useModal } from "../common/top.components/ModalContext";
import { IconButton } from "../buttons";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { BlockedChat } from "../chats/chat";

function BlockedContact() {
  const { openModal } = useModal();

  return (
    <StyledMainChatContainer>
      <OpenLefBarHeader
        name="Blocked Contact"
        icon={<CaretLeft />}
        onClick={() => {
          handleUpdateLeftBarSubType(LEFT_BAR.SETTING_SUB_TYPE.PRIVACY);
        }}
      />
      <Container center>
        <Container
          row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 15px",
          }}
        >
          <Typography type="h5" color="#4172ef" style={{ padding: 12 }}>
            Block New Contact
          </Typography>
          <IconButton
            icon={<Plus size={24} color="#4172ef" />}
            noshadow
            onClick={() =>
              openModal(
                <Container
                  style={{
                    gap: 20,
                    maxHeight: "100%",
                  }}
                >
                  <Container
                    row
                    style={{
                      alignItems: "center",
                      gap: 20,
                    }}
                  >
                    <IconButton icon={<X size={22} />} noshadow />
                    <Typography type="h3">Block New Contact</Typography>
                  </Container>
                  <StyledHorizontalLine />
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
                    }}
                  >
                    {"123hdnsdfkjdfngkjdfgkj"?.split("")?.map((item, index) => (
                      <BlockedChat user={item} newBlocked />
                    ))}
                  </StyledChatContainer>
                </Container>
              )
            }
          />
        </Container>
        <StyledHorizontalLine width="90%" />
      </Container>
      <StyledChatContainer
        style={{
          gap: 9,
          margin: "17px 7px",
        }}
      >
        {"123hdn"?.split("")?.map((item, index) => (
          <BlockedChat user={item} />
        ))}
      </StyledChatContainer>
    </StyledMainChatContainer>
  );
}

export default BlockedContact;
