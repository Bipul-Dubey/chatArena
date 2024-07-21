import { StyledTopContainer } from "../chats/chat.common";
import { Typography } from "./common";
import { IconButton } from "../buttons";

function OpenLefBarHeader({ name = "Header", icon = "", onClick = () => {} }) {
  return (
    <StyledTopContainer>
      <Typography
        type="h2"
        bold
        style={{ display: "flex", gap: 10, alignItems: "center" }}
      >
        {icon ? <IconButton icon={icon} noshadow onClick={onClick} /> : null}
        {name}
      </Typography>
    </StyledTopContainer>
  );
}

export default OpenLefBarHeader;
