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
import { CaretLeft, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { LEFT_BAR } from "@/constants/appConstant";
import { useModal } from "../common/top.components/ModalContext";
import { IconButton } from "../buttons";
import ModalContainer from "../common/top.components/ModalContainer";
import { BlockedChat } from "../chats/chat";
import BlockNewContactModal from "./BlockNewContactModal";

function BlockedContact() {
  const { openModal, closeModal } = useModal();

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
            onClick={() => openModal(<BlockNewContactModal />)}
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
          <BlockedChat user={item} key={index} />
        ))}
      </StyledChatContainer>
    </StyledMainChatContainer>
  );
}

export default BlockedContact;
