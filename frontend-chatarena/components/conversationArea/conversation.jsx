import styled from "styled-components";

const StyledConversationContainer = styled("div")(({}) => ({
  height: "100%",
  minHeight: "350px",
}));

const Conversation = () => {
  return (
    <StyledConversationContainer>Conversation</StyledConversationContainer>
  );
};

export default Conversation;
