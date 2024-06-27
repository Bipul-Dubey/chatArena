import React from "react";
import { StyledMainChatContainer } from "../chats/chat.common";
import {
  Avatar,
  Container,
  StyledHorizontalLine,
  Typography,
} from "../common/common";
import {
  Article,
  BellSimple,
  ClipboardText,
  Gear,
  Image,
  Key,
  Lock,
  PencilCircle,
  WarningCircle,
} from "@phosphor-icons/react";
import OpenLefBarHeader from "../common/OpenLeftbarHeader";
import { handleUpdateLeftBarSubType } from "@/store/services/app";
import { LEFT_BAR } from "@/constants/appConstant";

function Setting() {
  const iconSize = 20;
  const settingOptions = [
    {
      name: "Notifications",
      icon: <BellSimple size={iconSize} />,
      onClick: () => {
        handleUpdateLeftBarSubType(LEFT_BAR.SETTING_SUB_TYPE.Notification);
      },
    },
    {
      name: "Privacy",
      icon: <Lock size={iconSize} />,
      onClick: () => {
        handleUpdateLeftBarSubType(LEFT_BAR.SETTING_SUB_TYPE.PRIVACY);
      },
    },
    {
      name: "security",
      icon: <Key size={iconSize} />,
      onClick: () => {
        handleUpdateLeftBarSubType(LEFT_BAR.SETTING_SUB_TYPE.SECURITY);
      },
    },
    {
      name: "Theme",
      icon: <PencilCircle size={iconSize} />,
      onClick: () => {
        handleUpdateLeftBarSubType(LEFT_BAR.SETTING_SUB_TYPE.THEME);
      },
    },
    {
      name: "Chat Wallpaper",
      icon: <Image size={iconSize} />,
      onClick: () => {
        handleUpdateLeftBarSubType(LEFT_BAR.SETTING_SUB_TYPE.CHAT_WALLPAPER);
      },
    },
    {
      name: "Request Account Info",
      icon: <ClipboardText size={iconSize} />,
      onClick: () => {
        handleUpdateLeftBarSubType(
          LEFT_BAR.SETTING_SUB_TYPE.REQUEST_ACCOUNT_INFO
        );
      },
    },
    {
      name: "Keyboard Shortcuts",
      icon: <Article size={iconSize} />,
      onClick: () => {
        handleUpdateLeftBarSubType(
          LEFT_BAR.SETTING_SUB_TYPE.KEYBOARD_SHORTCUTS
        );
      },
    },
    {
      name: "Help",
      icon: <WarningCircle size={iconSize} s />,
      onClick: () => {
        handleUpdateLeftBarSubType(LEFT_BAR.SETTING_SUB_TYPE.HELP);
      },
    },
  ];

  return (
    <StyledMainChatContainer
      style={{ gap: 25, maxHeight: "fit-content", overflowY: "scroll" }}
    >
      <OpenLefBarHeader name="Settings" icon={<Gear />} />
      <Container
        style={{
          margin: "0px 7px",
          display: "flex",
          flexDirection: "row",
          gap: 30,
          alignItems: "center",
          padding: "0 30px",
        }}
      >
        <Avatar />
        <Container>
          <Typography type="h5">Random Name</Typography>
          <Typography type="h6">About.........</Typography>
        </Container>
      </Container>
      <Container>
        {settingOptions?.map((option, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={option.onClick}
          >
            <Typography
              type="h5"
              key={index}
              style={{
                padding: "20px 20px",
                display: "flex",
                alignItems: "center",
                gap: 20,
                cursor: "pointer",
                width: "100%",
                textTransform: "capitalize",
              }}
              color="#535252"
            >
              {option.icon}
              {option.name}
            </Typography>
            {settingOptions?.length - 1 != index ? (
              <StyledHorizontalLine width={"90%"} />
            ) : null}
          </div>
        ))}
      </Container>
    </StyledMainChatContainer>
  );
}

export default Setting;
