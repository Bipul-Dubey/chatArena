import { StyledHorizontalLine, Typography } from "../common/common";
import OpenLefBarHeader from "../common/OpenLeftbarHeader";
import { StyledMainChatContainer } from "../chats/chat.common";
import { CaretLeft, Fingerprint } from "@phosphor-icons/react";
import { handleUpdateLeftBarSubType } from "@/store/services/app";
import { IconButton } from "../buttons";

function Help() {
  const settings = [
    "Help Center",
    "Contact Us",
    "Licenses",
    "Terms and Privacy Policy",
  ];
  return (
    <StyledMainChatContainer>
      <OpenLefBarHeader
        name="Help"
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
            icon={<Fingerprint size={100} color="#fff" />}
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
          {settings?.map((item) => (
            <div style={{ display: "flex", gap: 15, flexDirection: "column" }}>
              <Typography color="grey" type="h4">
                {item}
              </Typography>
              <StyledHorizontalLine />
            </div>
          ))}
        </div>
      </div>
    </StyledMainChatContainer>
  );
}

export default Help;
