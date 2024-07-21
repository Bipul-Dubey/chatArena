import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading";

// Dynamically import components with a loading component
const AllContacts = dynamic(() => import("@/components/chats/allContacts"), {
  loading: () => <Loading />,
  ssr: false,
});
const CallLogs = dynamic(() => import("@/components/chats/callLogs"), {
  loading: () => <Loading />,
  ssr: false,
});
const Chats = dynamic(() => import("@/components/chats/chats"), {
  loading: () => <Loading />,
  ssr: false,
});
const ConversationArea = dynamic(
  () => import("@/components/conversationArea/conversationArea"),
  { loading: () => <Loading />, ssr: false }
);
const Noconversation = dynamic(
  () => import("@/components/conversationArea/noconversation"),
  { loading: () => <Loading />, ssr: false }
);
const StyledDashboardMainContainer = dynamic(
  () =>
    import("@/components/dashboard/dashboardComponent").then(
      (mod) => mod.StyledDashboardMainContainer
    ),
  { loading: () => <Loading />, ssr: false }
);
const Leftbar = dynamic(() => import("@/components/menubar/leftbar/leftbar"), {
  loading: () => <Loading />,
  ssr: false,
});
const ProfileOverview = dynamic(
  () => import("@/components/profiles/profileOverview"),
  { loading: () => <Loading />, ssr: false }
);
const AboutSetting = dynamic(
  () => import("@/components/settings/AboutSetting"),
  { loading: () => <Loading />, ssr: false }
);
const BlockedContact = dynamic(
  () => import("@/components/settings/BlockedContact"),
  { loading: () => <Loading />, ssr: false }
);
const ChatWallpaper = dynamic(
  () => import("@/components/settings/ChatWallpaper"),
  { loading: () => <Loading />, ssr: false }
);
const GroupSetting = dynamic(
  () => import("@/components/settings/GroupSettings"),
  { loading: () => <Loading />, ssr: false }
);
const Help = dynamic(() => import("@/components/settings/Help"), {
  loading: () => <Loading />,
  ssr: false,
});
const LastSeen = dynamic(() => import("@/components/settings/LastSeen"), {
  loading: () => <Loading />,
  ssr: false,
});
const NotificationSettings = dynamic(
  () => import("@/components/settings/NotificationSettings"),
  { loading: () => <Loading />, ssr: false }
);
const Privacy = dynamic(() => import("@/components/settings/Privacy"), {
  loading: () => <Loading />,
  ssr: false,
});
const ProfilePhotos = dynamic(
  () => import("@/components/settings/ProfilePhotos"),
  { loading: () => <Loading />, ssr: false }
);
const RequestAccountInfo = dynamic(
  () => import("@/components/settings/RequestAccountInfo"),
  { loading: () => <Loading />, ssr: false }
);
const Security = dynamic(() => import("@/components/settings/Security"), {
  loading: () => <Loading />,
  ssr: false,
});
const Setting = dynamic(() => import("@/components/settings/Setting"), {
  loading: () => <Loading />,
  ssr: false,
});
const CurrentUser = dynamic(() => import("@/components/profiles/CurrentUser"), {
  loading: () => <Loading />,
  ssr: false,
});

// Import constants and hooks
import { LEFT_BAR } from "@/constants/appConstant";
import { useSelector } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
              case LEFT_BAR.SETTING_SUB_TYPE.CHAT_WALLPAPER:
                return <ChatWallpaper />;
              case LEFT_BAR.SETTING_SUB_TYPE.REQUEST_ACCOUNT_INFO:
                return <RequestAccountInfo />;
              case LEFT_BAR.SETTING_SUB_TYPE.HELP:
                return <Help />;
              default:
                return <Setting />;
            }
          case LEFT_BAR.TYPE.CURRENT_PROFILE:
            return <CurrentUser />;
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
