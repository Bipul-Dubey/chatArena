import { Button } from "../buttons";
import {
  StyledMainChatContainer,
  StyledTopContainer,
} from "../chats/chat.common";
import {
  Avatar,
  Container,
  TextArea,
  TextField,
  Typography,
} from "../common/common";

function CurrentUser({}) {
  return (
    <StyledMainChatContainer>
      <StyledTopContainer>
        <Typography type="h2">Profile</Typography>
      </StyledTopContainer>
      <Container style={{ margin: "0px 7px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 40,
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          <div>
            <Avatar size="120px" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <TextField label="Name" />
            <Typography color="grey">
              This Name is visible to other users
            </Typography>
          </div>
          <TextArea label="About" />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button>Save</Button>
          </div>
        </div>
      </Container>
    </StyledMainChatContainer>
  );
}

export default CurrentUser;
