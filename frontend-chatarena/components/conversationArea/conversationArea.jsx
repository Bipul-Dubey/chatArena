import styled from "styled-components";
import Header from "./header";
import Conversation from "./conversation";
import Footer from "./footer";

const StyledMainConversationAreaBox = styled("section")(({}) => ({
  backgroundColor: "#fff",
  height: "100vh",
  minHeight: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const ConversationArea = () => {
  return (
    <StyledMainConversationAreaBox>
      {/* header */}
      <Header />
      {/* conversation */}
      <Conversation />
      {/* footer - texting area */}
      <Footer />
    </StyledMainConversationAreaBox>
  );
};

export default ConversationArea;
