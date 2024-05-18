import styled from "styled-components";
import { TextField } from "../common/common";
import {
  Microphone,
  PaperPlaneTilt,
  Paperclip,
  Smiley,
} from "@phosphor-icons/react";
import { IconButton } from "../buttons";
import { useState } from "react";

const StyledFooterContainer = styled("div")(({}) => ({
  alignSelf: "flex-end",
  height: "85px",
  backgroundColor: "#eef0f5",
  width: "100%",
  padding: "0px 20px",
  display: "flex",
  alignItems: "center",
  gap: 10,
}));

const Footer = ({}) => {
  const [message, setMessage] = useState("");
  return (
    <StyledFooterContainer>
      <TextField
        iconStart={<IconButton icon={<Paperclip size={20} />} noshadow />}
        iconEnd={<IconButton icon={<Smiley size={20} />} noshadow />}
        placeholder="Write your message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      {message ? null : (
        <IconButton size="35px" icon={<Microphone size={24} />} />
      )}
      <IconButton
        size="35px"
        icon={<PaperPlaneTilt size={24} />}
        borderRadius={7}
        backgroundColor="#5b97f6"
      />
    </StyledFooterContainer>
  );
};

export default Footer;
