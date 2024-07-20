import { StyledMainChatContainer } from "../chats/chat.common";
import SelectFrom3 from "./SelectFrom3";

function AboutSetting() {
  return (
    <StyledMainChatContainer>
      <SelectFrom3
        feature="About"
        message="Who can see my about"
        getUpdatedState={(data) => console.log(data)}
      />
    </StyledMainChatContainer>
  );
}

export default AboutSetting;
