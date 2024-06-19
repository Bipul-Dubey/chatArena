import styled from "styled-components";
import { StyledHorizontalLine, Typography } from "../common/common";
import {
  ArrowBendUpLeft,
  DotsThreeVertical,
  DownloadSimple,
  Images,
  KeyReturn,
} from "@phosphor-icons/react";
import { IconButton } from "../buttons";
import { Options } from "../common/menuOptions";

// =========== Message Time ============
const MessageTime = ({ time = "00:00" }) => {
  return (
    <div style={{ alignSelf: "flex-end", marginTop: 2 }}>
      <Typography color="gray" type="p">
        {time}
      </Typography>
    </div>
  );
};

// ============ TEXT Messages =============
const StyledMessageContainer = styled("div")(({ isIncoming }) => ({
  display: "flex",
  justifyContent: isIncoming ? "start" : "end",
  flexDirection: "row",
}));

const StyledMessageBox = styled("div")(({ isIncoming }) => ({
  borderRadius: 7,
  maxWidth: "80%",
  minWidth: "min-content",
  backgroundColor: isIncoming ? "#D0ECFA" : "#e0f0f0",
  padding: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  order: 2,
}));

export const TextMessage = ({ chat, isMenu }) => {
  return (
    <StyledMessageContainer isIncoming={chat?.incoming}>
      <StyledMessageBox isIncoming={chat?.incoming}>
        <Typography>{chat?.message}</Typography>
        <MessageTime time={chat?.time} />
      </StyledMessageBox>
      <MessageOptions isIncoming={chat.incoming} isMenu={isMenu} />
    </StyledMessageContainer>
  );
};

// ======= TimeLine ========
export const TimeLine = ({ divider }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
      }}
    >
      <StyledHorizontalLine width={"46%"} />
      <Typography>{divider?.text}</Typography>
      <StyledHorizontalLine width={"46%"} />
    </div>
  );
};

// image message
export const ImageMessage = ({ chat, isMenu }) => {
  return (
    <StyledMessageContainer isIncoming={chat?.incoming}>
      <StyledMessageBox isIncoming={chat?.incoming}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={chat?.img}
            alt={chat?.message}
            style={{
              maxHeight: 210,
              borderRadius: "10px",
            }}
          />
          <Typography variant="body2" isIncoming={chat?.incoming}>
            {chat.message}
          </Typography>
          <MessageTime time={chat.time} />
        </div>
      </StyledMessageBox>
      <MessageOptions isIncoming={chat.incoming} isMenu={isMenu} />
    </StyledMessageContainer>
  );
};

// reply message container
const StyledReplyMessageContainer = styled("div")(({}) => ({
  borderRadius: 6,
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  padding: 4,
}));

export const ReplyMessage = ({ chat, isMenu }) => {
  return (
    <StyledMessageContainer isIncoming={chat?.incoming}>
      <StyledMessageBox isIncoming={chat?.incoming}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <StyledReplyMessageContainer>
            <Typography color="#2c9ef0">{chat?.message}</Typography>
          </StyledReplyMessageContainer>
          <Typography style={{ alignSelf: "flex-end" }}>
            {chat?.reply}
          </Typography>
        </div>
        <MessageTime />
      </StyledMessageBox>
      <MessageOptions isIncoming={chat.incoming} isMenu={isMenu} />
    </StyledMessageContainer>
  );
};

// link message
const StyledLinkContainer = styled("div")(({}) => ({
  borderRadius: 1,
  display: "flex",
  flexDirection: "column",
}));

export const LinkMessage = ({ chat, isMenu }) => {
  return (
    <StyledMessageContainer isIncoming={chat.incoming}>
      <StyledMessageBox isIncoming={chat.incoming}>
        <StyledLinkContainer>
          <img
            src={chat?.preview}
            alt={chat?.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <div spacing={2} alignItems={"center"}>
            <Typography variant="subtitle2">Youtube</Typography>
            <Typography
              link
              onClick={(e) => {
                e.stopPropagation();
                window.open(chat.url);
              }}
            >
              www.youtube.com
            </Typography>
          </div>
          <Typography>{chat.message}</Typography>
        </StyledLinkContainer>
        <MessageTime />
      </StyledMessageBox>
      <MessageOptions isIncoming={chat.incoming} isMenu={isMenu} />
    </StyledMessageContainer>
  );
};

// document container
const StyledDocumentContainer = styled("div")(({ theme }) => ({
  borderRadius: 1,
}));

export const DocumentMessage = ({ chat, isMenu }) => {
  return (
    <StyledMessageContainer isIncoming={chat.incoming}>
      <StyledMessageBox style={{ padding: 2 }} isIncoming={chat.incoming}>
        <div
          style={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledDocumentContainer
            style={{
              padding: 1,
              display: "flex",
              gap: 4,
              alignItems: "center",
            }}
            alignItems={"center"}
          >
            <Images size={28} />
            <Typography>Abstract.png</Typography>
            <IconButton icon={<DownloadSimple />} noshadow />
          </StyledDocumentContainer>
          <StyledHorizontalLine width="90%" />
        </div>
        <Typography>{chat.message}</Typography>
        <MessageTime />
      </StyledMessageBox>
      <MessageOptions isIncoming={chat.incoming} isMenu={isMenu} />
    </StyledMessageContainer>
  );
};

const MessageOptions = ({ isIncoming = false, isMenu = true }) => {
  const options = [
    {
      name: (
        <div style={{ gap: 12, display: "flex", alignItems: "center" }}>
          <ArrowBendUpLeft />
          <Typography type="h5">Reply</Typography>
        </div>
      ),
      func: () => {
        return true;
      },
    },
  ];

  return isMenu ? (
    <div style={{ order: isIncoming ? 3 : 1 }}>
      <Options options={options} position={isIncoming ? "left" : "right"}>
        <DotsThreeVertical
          size={20}
          style={{ cursor: "pointer" }}
          id="basic-button"
        />
      </Options>
    </div>
  ) : null;
};
