import styled from "styled-components";
import { faker } from "@faker-js/faker/locale/af_ZA";
import { IconButton } from "../buttons";

// ==================== Container ====================
const StyledContainer = styled("div")(({ row = false, center = false }) => ({
  display: "flex",
  flexDirection: row ? "row" : "column",
  justifyContent: center ? "center" : "",
  alignItems: center ? "center" : "",
}));

// ==================== Container ====================
export const Container = ({ children, row, style, center }) => {
  return (
    <StyledContainer style={style} row={row} center={center}>
      {children}
    </StyledContainer>
  );
};

// ==================== line ====================
export const StyledHorizontalLine = styled("hr")(
  ({ width = "100%", center = false }) => ({
    width: width,
    height: "0.1rem",
    backgroundColor: "gray",
    boxShadow: "0px 1px 1px 1px rgba(168, 168, 168, 0.5)",
  })
);

// ==================== Profile image ====================
const StyledAvatarContainer = styled("div")(
  ({ status = false, isactive = false, size = "" }) => ({
    height: size,
    width: size,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `${status ? "2px" : "1px"} solid ${
      status ? (isactive ? "#09b412" : "#cb1515") : "#070707"
    }`,
    "&:hover": {
      cursor: "pointer",
    },
  })
);

const StyledAvatarImage = styled("img")(({ size = "50px" }) => ({
  width: size,
  height: size,
  borderRadius: "50%",
  objectFit: "contain",
}));

export const Avatar = ({
  src,
  size = "50px",
  style = {},
  onClick = () => {},
  status = false,
  isactive = false,
}) => {
  return (
    <StyledAvatarContainer
      size={size}
      style={style}
      onClick={onClick}
      status={status}
      isactive={isactive}
    >
      {src ? (
        <StyledAvatarImage size={size} loading="lazy" src={src} />
      ) : (
        <StyledAvatarImage
          size={size}
          loading="lazy"
          src={faker.image.avatar()}
        />
      )}
    </StyledAvatarContainer>
  );
};

// ==================== Unread Message Box ====================
export const UnreadMessage = ({
  unread = null,
  backgroundColor = "#000",
  color = "#fff",
}) => {
  return unread ? (
    <div
      style={{
        padding: "3px",
        width: "24px",
        backgroundColor: backgroundColor,
        color: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1rem",
        borderRadius: "50%",
      }}
    >
      {unread > 9 ? `9+` : unread}
    </div>
  ) : null;
};

// ==================== Text area ====================
const StyledTypography = styled("div")(
  ({ type = "", link = false, color = "" }) => ({
    fontSize:
      type == "h1"
        ? "2.125rem"
        : type == "h2"
        ? "1.875rem"
        : type == "h3"
        ? "1.5rem"
        : type == "h4"
        ? "1.25rem"
        : type == "h5"
        ? "1.125rem"
        : type == "h6"
        ? "1rem"
        : "",
    color: link ? "#1c60f4" : color,
    cursor: link ? "pointer" : "default",
  })
);

export const Typography = ({ children, type = "", link = false }) => {
  return (
    <StyledTypography type={type} link={link}>
      {children}
    </StyledTypography>
  );
};

// ==================== Textfield ====================
const StyledTextfieldContainer = styled("div")(({ isEndIcon = false }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: isEndIcon ? "flex-end" : "flex-start",
}));

const StyledTextfield = styled("input")(
  ({ borderColor = "", isStartIcon = false, isEndIcon = false }) => ({
    width: "100%",
    padding: 10,
    paddingLeft: isStartIcon ? "45px" : "",
    paddingRight: isEndIcon ? "45px" : "",
    fontSize: "1rem",
    borderRadius: 7,
    backgroundColor: "#d0ecfa",
    border: "none",
    "&:focus": {
      borderColor: borderColor,
      outline: "none",
      borderRadius: 7,
    },
  })
);

const StyledIconContainer = styled("div")(({ iconEnd = false }) => ({
  position: "absolute",
  padding: iconEnd ? "0px 7px 0px 0px" : "0px 0px 0px 7px",
  borderRadius: "50%",
}));

export const TextField = ({
  borderColor = "#40C7F1",
  placeholder = "",
  onChange = () => {},
  iconStart = "",
  iconEnd = "",
}) => {
  return (
    <StyledTextfieldContainer
      isStartIcon={iconStart ? true : false}
      isEndIcon={iconEnd ? true : false}
    >
      {iconStart ? (
        <StyledIconContainer isStartIcon={iconStart ? true : false}>
          {<IconButton disabled icon={iconStart} noshadow />}
        </StyledIconContainer>
      ) : (
        ""
      )}
      <StyledTextfield
        placeholder={placeholder}
        onChange={onChange}
        borderColor={borderColor}
        isStartIcon={iconStart ? true : false}
        isEndIcon={iconEnd ? true : false}
      />
      {iconEnd ? (
        <StyledIconContainer iconEnd={iconEnd ? true : false}>
          {<IconButton disabled icon={iconEnd} noshadow />}
        </StyledIconContainer>
      ) : (
        ""
      )}
    </StyledTextfieldContainer>
  );
};
