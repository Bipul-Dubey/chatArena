import { useState } from "react";
import { Container, StyledHorizontalLine, Typography } from "../common/common";
import OpenLefBarHeader from "../common/OpenLeftbarHeader";
import { StyledMainChatContainer } from "../chats/chat.common";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import {
  handleUpdateLeftBarPrivacy,
  handleUpdateLeftBarSubType,
} from "@/store/services/app";
import { CheckboxButton, IconButton } from "../buttons";
import { LEFT_BAR } from "@/constants/appConstant";

function Privacy() {
  const [settingOptions, setSettingOptions] = useState([
    { label: LEFT_BAR.Privacy_SUB_TYPE.Last_Seen, value: "Everyone" },
    { label: LEFT_BAR.Privacy_SUB_TYPE.Profile_Photo, value: "Everyone" },
    { label: LEFT_BAR.Privacy_SUB_TYPE.About, value: "Everyone" },
    {
      label: LEFT_BAR.Privacy_SUB_TYPE.Read_Receipts,
      value:
        "it turned off, you won't send or receive read receipts. Read receipts are always send for group chats",
      isEnable: false,
    },
    {
      label: LEFT_BAR.Privacy_SUB_TYPE.Groups,
      value: "Everyone",
    },
    {
      label: LEFT_BAR.Privacy_SUB_TYPE.Blocked_Contacts,
      value: 9,
    },
  ]);

  return (
    <StyledMainChatContainer>
      <OpenLefBarHeader
        name="Privacy"
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
                padding: "20px 20px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
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
                {setting.value && (
                  <Typography color="#8c8a8a">{setting.value}</Typography>
                )}
              </div>
              {(() => {
                switch (setting.label) {
                  case LEFT_BAR.Privacy_SUB_TYPE.Read_Receipts:
                    return (
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
                    );
                  default:
                    return (
                      <IconButton
                        icon={<CaretRight size={20} />}
                        noshadow
                        onClick={() => {
                          switch (setting.label) {
                            case LEFT_BAR.Privacy_SUB_TYPE.Last_Seen:
                              handleUpdateLeftBarPrivacy(
                                LEFT_BAR.Privacy_SUB_TYPE.Last_Seen
                              );
                              return;
                            case LEFT_BAR.Privacy_SUB_TYPE.Profile_Photo:
                              handleUpdateLeftBarPrivacy(
                                LEFT_BAR.Privacy_SUB_TYPE.Profile_Photo
                              );
                              return;
                            case LEFT_BAR.Privacy_SUB_TYPE.About:
                              handleUpdateLeftBarPrivacy(
                                LEFT_BAR.Privacy_SUB_TYPE.About
                              );
                              return;
                            case LEFT_BAR.Privacy_SUB_TYPE.Groups:
                              handleUpdateLeftBarPrivacy(
                                LEFT_BAR.Privacy_SUB_TYPE.Groups
                              );
                              return;
                            case LEFT_BAR.Privacy_SUB_TYPE.Blocked_Contacts:
                              handleUpdateLeftBarPrivacy(
                                LEFT_BAR.Privacy_SUB_TYPE.Blocked_Contacts
                              );
                              return;
                          }
                        }}
                      />
                    );
                }
              })()}
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

export default Privacy;
