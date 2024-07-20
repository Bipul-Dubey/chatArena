import { IconButton } from "@/components/buttons";
import {
  Avatar,
  StyledHorizontalLine,
  Typography,
} from "@/components/common/common";
import { Options } from "@/components/common/menuOptions";
import { LEFT_BAR } from "@/constants/appConstant";
import { handleUpdateToggleLeftBar } from "@/store/services/app";
import {
  ChatCircleDots,
  Gear,
  Phone,
  SignOut,
  Users,
} from "@phosphor-icons/react";
import styled from "styled-components";

const StyledLeftbarContainer = styled("div")(({}) => ({
  backgroundColor: "#F1F4FB",
  minWidth: "85px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "2px 2px 12px #8b8787, -2px -2px 12px #7d7a7a",
  minHeight: "100vh",
  "@media (min-height: 568px)": {
    height: "100vh",
  },
}));

const StyledImage = styled("img")(({}) => ({
  height: "50px",
  width: "50px",
  background: "transparent",
  margin: "17px 0px",
  objectFit: "contain",
}));

const StyledOptionContainer = styled("div")(({}) => ({
  margin: "20px 0px",
  display: "flex",
  flexDirection: "column",
  gap: 17,
}));

const StyledAlign = styled("div")(({ bottom = false }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  margin: bottom ? "40px 0px" : "",
  gap: bottom ? 9 : "",
}));

const Leftbar = ({ activeLeftBarType = "" }) => {
  return (
    <StyledLeftbarContainer>
      <StyledAlign>
        <StyledImage width={"50px"} height={"50%"} src="siteimage.png" />
        <StyledOptionContainer>
          <IconButton
            size="45px"
            icon={<ChatCircleDots size={"30px"} />}
            onClick={() => {
              handleUpdateToggleLeftBar(LEFT_BAR.TYPE.CHAT);
            }}
            isactive={activeLeftBarType == LEFT_BAR.TYPE.CHAT}
          />
          <IconButton
            size="45px"
            icon={<Users size={"30px"} />}
            onClick={() => {
              handleUpdateToggleLeftBar(LEFT_BAR.TYPE.ALL_CONTACTS);
            }}
            isactive={activeLeftBarType == LEFT_BAR.TYPE.ALL_CONTACTS}
          />
          <IconButton
            size="45px"
            icon={<Phone size={"30px"} />}
            onClick={() => {
              handleUpdateToggleLeftBar(LEFT_BAR.TYPE.CALL_LOGS);
            }}
            isactive={activeLeftBarType == LEFT_BAR.TYPE.CALL_LOGS}
          />
          <StyledHorizontalLine />
          <IconButton
            size="45px"
            icon={<Gear size={"30px"} />}
            onClick={() => {
              handleUpdateToggleLeftBar(LEFT_BAR.TYPE.SETTINGS);
            }}
            isactive={activeLeftBarType == LEFT_BAR.TYPE.SETTINGS}
          />
        </StyledOptionContainer>
      </StyledAlign>
      <StyledAlign bottom>
        <Options
          options={[
            {
              name: (
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Typography type="h5">Logout</Typography>
                  <SignOut size={25} />
                </div>
              ),
              func: () => {},
            },
          ]}
          position="top"
        >
          <Avatar />
        </Options>
      </StyledAlign>
    </StyledLeftbarContainer>
  );
};

export default Leftbar;
