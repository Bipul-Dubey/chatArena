import OpenLefBarHeader from "../common/OpenLeftbarHeader";
import { StyledMainChatContainer } from "../chats/chat.common";
import { CaretLeft, ClipboardText } from "@phosphor-icons/react";
import { handleUpdateLeftBarSubType } from "@/store/services/app";
import { IconButton } from "../buttons";
import { StyledHorizontalLine, Typography } from "../common/common";

function RequestAccountInfo() {
  const settings = [
    "Help Center",
    "Contact Us",
    "Licenses",
    "Terms and Privacy Policy",
  ];
  return (
    <StyledMainChatContainer>
      <OpenLefBarHeader
        name="Request Account Info"
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
            icon={<ClipboardText size={100} color="#fff" />}
            size="110px"
            backgroundColor="#27aaeb"
          />
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
          <Typography type="h5" color="grey">
            Request Report
          </Typography>
          <StyledHorizontalLine />
          <Typography color="grey">
            Create a report of your Talk Account Information and settings, which
            you can access or port to another app. This report does not include
            your messages.
          </Typography>
        </div>
      </div>
    </StyledMainChatContainer>
  );
}

export default RequestAccountInfo;
