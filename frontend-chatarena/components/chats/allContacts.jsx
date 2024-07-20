import {
  StyledChatContainer,
  StyledMainChatContainer,
  StyledTopContainer,
} from "./chat.common";
import { Container, TextField, Typography } from "../common/common";
import { IconButton } from "../buttons";
import { CircleDashed, MagnifyingGlass } from "@phosphor-icons/react";
import Chat from "./chat";

const AllContacts = () => {
  return (
    <StyledMainChatContainer>
      <StyledTopContainer>
        <Typography type="h2">Contacts</Typography>
        <IconButton noshadow icon={<CircleDashed size={24} />} />
      </StyledTopContainer>
      <Container style={{ margin: "0px 7px" }}>
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
        {"123hdnfdsnfansdmfasdfnmasdnfmasdsdfsdfnsdkfnsk"
          ?.split("")
          ?.map((item, index) => (
            <Chat user={item} isactive={index % 2 == 0} />
          ))}
      </StyledChatContainer>
    </StyledMainChatContainer>
  );
};

export default AllContacts;
