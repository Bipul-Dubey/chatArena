import React from "react";
import {
  StyledMainChatContainer,
  StyledTopContainer,
} from "../chats/chat.common";
import { Avatar, Container, Typography } from "../common/common";
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

function Setting() {
  const settingOptions = [
    {
      name: "Notifications",
      icon: <BellSimple />,
      onClick: () => {},
    },
    {
      name: "Privacy",
      icon: <Lock />,
      onClick: () => {},
    },
    {
      name: "security",
      icon: <Key />,
      onClick: () => {},
    },
    {
      name: "Theme",
      icon: <PencilCircle />,
      onClick: () => {},
    },
    {
      name: "Chat Wallpaper",
      icon: <Image />,
      onClick: () => {},
    },
    {
      name: "Request Account Info",
      icon: <ClipboardText />,
      onClick: () => {},
    },
    {
      name: "Keyboard Shortcuts",
      icon: <Article />,
      onClick: () => {},
    },
    {
      name: "Help",
      icon: <WarningCircle />,
      onClick: () => {},
    },
  ];

  return (
    <StyledMainChatContainer style={{ gap: 25 }}>
      <StyledTopContainer>
        <Typography
          type="h2"
          bold
          style={{ display: "flex", gap: 10, alignItems: "center" }}
        >
          <Gear />
          Settings
        </Typography>
      </StyledTopContainer>
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
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {option.icon}
            <Typography type="h5" onClick={option.onClick}>
              {option.name}
            </Typography>
          </div>
        ))}
      </Container>
    </StyledMainChatContainer>
  );
}

export default Setting;
