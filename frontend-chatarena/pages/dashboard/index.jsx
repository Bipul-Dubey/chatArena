import AllContacts from "@/components/chats/allContacts";
import CallLogs from "@/components/chats/callLogs";
import Chats from "@/components/chats/chats";
import ConversationArea from "@/components/conversationArea/conversationArea";
import Noconversation from "@/components/conversationArea/noconversation";
import Leftbar from "@/components/menubar/leftbar/leftbar";
import ProfileOverview from "@/components/profiles/profileOverview";
import AboutSetting from "@/components/settings/AboutSetting";
import BlockedContact from "@/components/settings/BlockedContact";
import ChatWallpaper from "@/components/settings/ChatWallpaper";
import GroupSetting from "@/components/settings/GroupSettings";
import Help from "@/components/settings/Help";
import LastSeen from "@/components/settings/LastSeen";
import NotificationSettings from "@/components/settings/NotificationSettings";
import Privacy from "@/components/settings/Privacy";
import ProfilePhotos from "@/components/settings/ProfilePhotos";
import RequestAccountInfo from "@/components/settings/RequestAccountInfo";
import Security from "@/components/settings/Security";
import Setting from "@/components/settings/Setting";
import Theme from "@/components/settings/Theme";
import KeyboardShortCut from "@/components/settings/keyboardShortCut";
import { LEFT_BAR } from "@/constants/appConstant";
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
  const { leftBar } = useSelector((state) => ({
    leftBar: state.app.leftBar,
  }));

  const router = useRouter();
  const [conversationId, setConversationId] = useState(null);

  useEffect(() => {
    if (router.query.chat) {
      setConversationId(router.query.chat);
    } else {
      setConversationId(null);
    }
  }, [router]);

  console.log("leftBar", leftBar);

  return (
    <StyledDashboardMainContainer>
      <Leftbar activeLeftBarType={leftBar.type} />
      {(() => {
        switch (leftBar.type) {
          case LEFT_BAR.TYPE.CHAT:
            return <Chats />;
          case LEFT_BAR.TYPE.ALL_CONTACTS:
            return <AllContacts />;
          case LEFT_BAR.TYPE.CALL_LOGS:
            return <CallLogs />;
          case LEFT_BAR.TYPE.SETTINGS:
            switch (leftBar.subType) {
              case LEFT_BAR.SETTING_SUB_TYPE.Notification:
                return <NotificationSettings />;
              case LEFT_BAR.SETTING_SUB_TYPE.PRIVACY:
                switch (leftBar.privacySubType) {
                  case LEFT_BAR.Privacy_SUB_TYPE.Last_Seen:
                    return <LastSeen />;
                  case LEFT_BAR.Privacy_SUB_TYPE.Profile_Photo:
                    return <ProfilePhotos />;
                  case LEFT_BAR.Privacy_SUB_TYPE.About:
                    return <AboutSetting />;
                  case LEFT_BAR.Privacy_SUB_TYPE.Groups:
                    return <GroupSetting />;
                  case LEFT_BAR.Privacy_SUB_TYPE.Blocked_Contacts:
                    return <BlockedContact />;
                  default:
                    return <Privacy />;
                }
              case LEFT_BAR.SETTING_SUB_TYPE.SECURITY:
                return <Security />;
              case LEFT_BAR.SETTING_SUB_TYPE.THEME:
                return <Theme />;
              case LEFT_BAR.SETTING_SUB_TYPE.CHAT_WALLPAPER:
                return <ChatWallpaper />;
              case LEFT_BAR.SETTING_SUB_TYPE.REQUEST_ACCOUNT_INFO:
                return <RequestAccountInfo />;
              case LEFT_BAR.SETTING_SUB_TYPE.KEYBOARD_SHORTCUTS:
                return <KeyboardShortCut />;
              case LEFT_BAR.SETTING_SUB_TYPE.HELP:
                return <Help />;
              default:
                return <Setting />;
            }
          default:
            return null;
        }
      })()}
      {conversationId ? <ConversationArea /> : <Noconversation />}
      <ProfileOverview />
    </StyledDashboardMainContainer>
  );
};

export default Dashboard;
