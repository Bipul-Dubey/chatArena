import React from "react";
import { Container, Typography } from "../common/common";
import OpenLefBarHeader from "../common/OpenLeftbarHeader";
import { StyledMainChatContainer } from "../chats/chat.common";
import {
  CaretLeft,
  ChatCircleDots,
  CircleDashed,
  LinkSimpleBreak,
  LockKey,
  MapPin,
  Phone,
} from "@phosphor-icons/react";
import { handleUpdateLeftBarSubType } from "@/store/services/app";
import { IconButton } from "../buttons";

function Security() {
  const iconSize = 24;
  const settings = [
    {
      icon: <ChatCircleDots size={iconSize} />,
      text: "Text and voice messages",
    },
    {
      icon: <Phone size={iconSize} />,
      text: "Audio & Video Calls",
    },
    {
      icon: <LinkSimpleBreak size={iconSize} />,
      text: "Photos, videos & documents",
    },
    {
      icon: <MapPin size={iconSize} />,
      text: "Location Sharing",
    },
    {
      icon: <ChatCircleDots size={iconSize} />,
      text: "Status Updates",
    },
    {
      icon: <CircleDashed size={iconSize} />,
      text: "Text and voice messages",
    },
  ];

  return (
    <StyledMainChatContainer>
      <OpenLefBarHeader
        name="Security"
        icon={<CaretLeft />}
        onClick={() => {
          handleUpdateLeftBarSubType("");
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 30,
          alignItems: "center",
          padding: "0px 20px",
        }}
      >
        <div>
          <IconButton
            disabled
            icon={<LockKey size={100} color="#fff" />}
            size="110px"
            backgroundColor="#27aaeb"
          />
        </div>
        <div>
          <Typography type="h3">Your Chats and calls are private</Typography>
          <Typography>
            End-to-end encryption keeps your personal messages & call between
            you and person you choose to communicate with. Not even talk can
            read or listen to them. This includes your
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          {settings?.map((item) => (
            <div style={{ display: "flex", gap: 40 }}>
              <Typography color="grey">{item.icon}</Typography>
              <Typography color="grey" type="h4">
                {item.text}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </StyledMainChatContainer>
  );
}

export default Security;
