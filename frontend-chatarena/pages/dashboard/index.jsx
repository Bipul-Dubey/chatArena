import AllContacts from "@/components/chats/allContacts";
import CallLogs from "@/components/chats/callLogs";
import Chats from "@/components/chats/chats";
import ConversationArea from "@/components/conversationArea/conversationArea";
import Noconversation from "@/components/conversationArea/noconversation";
import Leftbar from "@/components/menubar/leftbar/leftbar";
import ProfileOverview from "@/components/profiles/profileOverview";
import { useSelector } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledDashboardMainContainer = styled("div")(({}) => ({
  backgroundColor: "#f0F5FB",
  display: "flex",
  minHeight: "100vh",
}));

const Dashboard = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [conversationId, setConversationId] = useState(null);

  useEffect(() => {
    if (router.query.chat) {
      setConversationId(router.query.chat);
    } else {
      setConversationId(null);
    }
  }, [router]);

  return (
    <StyledDashboardMainContainer>
      <Leftbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {activeIndex == 0 ? <Chats /> : null}
      {activeIndex == 1 ? <AllContacts /> : null}
      {activeIndex == 2 ? <CallLogs /> : null}
      {conversationId ? <ConversationArea /> : <Noconversation />}
      <ProfileOverview />
    </StyledDashboardMainContainer>
  );
};

export default Dashboard;
