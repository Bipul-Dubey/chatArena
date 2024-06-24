import React from "react";
import {
  StyledMainChatContainer,
  StyledTopContainer,
} from "../chats/chat.common";
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

function Setting() {
  const iconSize = 20;
  const settingOptions = [
    {
      name: "Notifications",
      icon: <BellSimple size={iconSize} />,
      onClick: () => {},
    },
    {
      name: "Privacy",
      icon: <Lock size={iconSize} />,
      onClick: () => {},
    },
    {
      name: "security",
      icon: <Key size={iconSize} />,
      onClick: () => {},
    },
    {
      name: "Theme",
      icon: <PencilCircle size={iconSize} />,
      onClick: () => {},
    },
    {
      name: "Chat Wallpaper",
      icon: <Image size={iconSize} />,
      onClick: () => {},
    },
    {
      name: "Request Account Info",
      icon: <ClipboardText size={iconSize} />,
      onClick: () => {},
    },
    {
      name: "Keyboard Shortcuts",
      icon: <Article size={iconSize} />,
      onClick: () => {},
    },
    {
      name: "Help",
      icon: <WarningCircle size={iconSize} s />,
      onClick: () => {},
    },
  ];

  return (
    <StyledMainChatContainer
      style={{ gap: 25, maxHeight: "fit-content", overflowY: "scroll" }}
    >
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
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              type="h5"
              onClick={option.onClick}
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
