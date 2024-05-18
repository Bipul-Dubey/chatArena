import Chats from "@/components/chats/chats";
import ConversationArea from "@/components/conversationArea/conversationArea";
import Leftbar from "@/components/menubar/leftbar/leftbar";
import React, { useState } from "react";
import styled from "styled-components";

const StyledDashboardMainContainer = styled("div")(({}) => ({
  backgroundColor: "#f0F5FB",
  display: "flex",
  minHeight: "100vh",
}));

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledDashboardMainContainer>
      <Leftbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {activeIndex == 0 ? <Chats /> : null}
      <ConversationArea />
    </StyledDashboardMainContainer>
  );
};

export default Dashboard;
