import React, { useState } from "react";
import { StyledMainChatContainer } from "../chats/chat.common";
import OpenLefBarHeader from "../common/OpenLeftbarHeader";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { Container, StyledHorizontalLine, Typography } from "../common/common";
import { CheckboxButton } from "../buttons";
import { handleUpdateLeftBarSubType } from "@/store/services/app";

function NotificationSettings({}) {
  const [settingOptions, setSettingOptions] = useState([
    {
      label: "Notifications",
      subLabel: "Show notifications for new messages",
      isEnable: false,
    },
    {
      label: "Show Previews",
      subLabel: "",
      isEnable: false,
    },
    {
      label: "Show Reactions Notifications",
      subLabel: "",
      isEnable: false,
    },
    {
      label: "Incoming calls ringtone",
      subLabel: "",
      isEnable: false,
    },
    {
      label: "Sounds",
      subLabel: "Play sounds for incoming messages",
      isEnable: false,
    },
  ]);

  return (
    <StyledMainChatContainer>
      <OpenLefBarHeader
        name="Notification"
        icon={<CaretLeft />}
        onClick={() => {
          handleUpdateLeftBarSubType("");
        }}
      />
      <Container>
        {settingOptions?.map((setting, index) => (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "25px 20px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 7,
                }}
              >
                <Typography
                  type="h5"
                  onClick={() => {}}
                  key={setting.label + index}
                  style={{
                    textTransform: "capitalize",
                  }}
                  color="#535252"
                >
                  {setting.label}
                </Typography>
                {setting.subLabel && (
                  <Typography color="#8c8a8a">{setting.subLabel}</Typography>
                )}
              </div>
              <CheckboxButton
                small
                checked={setting.isEnable}
                onClick={(e) => {
                  setSettingOptions((prevState) => {
                    const newState = [...prevState];
                    newState[index].isEnable = e.target.checked;
                    return newState;
                  });
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {settingOptions?.length - 1 != index && (
                <StyledHorizontalLine width={"90%"} />
              )}
            </div>
          </div>
        ))}
      </Container>
    </StyledMainChatContainer>
  );
}

export default NotificationSettings;
