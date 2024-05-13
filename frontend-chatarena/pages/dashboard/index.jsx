import Chats from "@/components/chats/chats";
import Leftbar from "@/components/menubar/leftbar/leftbar";
import React from "react";
import styled from "styled-components";

const StyledDashboardMainContainer = styled("div")(({}) => ({
  backgroundColor: "#f0F5FB",
  display: "flex",
}));

const Dashboard = () => {
  return (
    <StyledDashboardMainContainer>
      <Leftbar />
      <Chats />
    </StyledDashboardMainContainer>
  );
};

export default Dashboard;
