import styled from "styled-components";

const StyledMainConversationAreaBox = styled("section")(({}) => ({
  backgroundColor: "#fff",
  height: "100vh",
  width: "100%",
}));

const ConversationArea = () => {
  return <StyledMainConversationAreaBox></StyledMainConversationAreaBox>;
};

export default ConversationArea;
