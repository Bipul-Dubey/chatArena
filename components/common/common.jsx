import styled, { keyframes } from "styled-components";
import { faker } from "@faker-js/faker/locale/af_ZA";
import { IconButton } from "../buttons";
import { useState } from "react";

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
  ({ width = "100%", center = false, padding = "" }) => ({
    width: width,
    height: "0.1rem",
    backgroundColor: "gray",
    boxShadow: "0px 0.1px 0.01px 0.5px rgba(168, 168, 168, 0.5)",
    padding: padding,
  })
);

export const StyledVerticalLine = styled("div")(
  ({ width = "1px", height = "55px" }) => ({
    width: width,
    height: height,
    backgroundColor: "gray",
  })
);

// ==================== Profile image ====================
const StyledAvatarContainer = styled("div")(({ size = "" }) => ({
  height: size,
  width: size,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    cursor: "pointer",
  },
}));

const StyledAvatarImage = styled("img")(
  ({ size = "50px", status = false, isactive = false }) => ({
    width: size,
    height: size,
    borderRadius: "50%",
    objectFit: "contain",
    border: `${status ? "2px" : "1px"} solid ${
      status ? (isactive ? "#09b412" : "#cb1515") : "#070707"
    }`,
  })
);

export const Avatar = ({
  src,
  size = "50px",
  style = {},
  onClick = () => {},
  status = false,
  isactive = false,
}) => {
  return (
    <StyledAvatarContainer size={size} style={style} onClick={onClick}>
      {src ? (
        <StyledAvatarImage
          size={size}
          loading="lazy"
          src={src}
          status={status}
          isactive={isactive}
        />
      ) : (
        <StyledAvatarImage
          size={size}
          loading="lazy"
          src={faker.image.avatar()}
          status={status}
          isactive={isactive}
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
  ({ type = "", link = false, color = "", bold }) => ({
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
    fontWeight: bold ? "bold" : "",
  })
);

export const Typography = ({
  children,
  type = "",
  link = false,
  style = {},
  color = "",
  bold = false,
}) => {
  return (
    <StyledTypography
      type={type}
      link={link}
      style={style}
      color={color}
      bold={bold}
    >
      {children}
    </StyledTypography>
  );
};

// ==================== Textfield ====================
const StyledTextfieldContainer = styled("div")(({}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
}));

const StyledTextfield = styled("input")(
  ({
    borderColor = "",
    isStartIcon = false,
    isEndIcon = false,
    height = "",
  }) => ({
    width: "100%",
    height: height,
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

const StyledStartIconContainer = styled("div")(({}) => ({
  position: "absolute",
  left: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledEndIconContainer = styled("div")(({}) => ({
  position: "absolute",
  right: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledLabel = styled("label")(({ isactive = false }) => ({
  position: "absolute",
  top: isactive ? "0px" : "50%",
  left: "10px",
  fontSize: "1rem",
  color: "#7f7e7e",
  transform: "translateY(-50%)",
  transition: "all 0.5s ease",
  PointerEvent: "none",
  fontWeight: 600,
}));

export const TextField = ({
  borderColor = "#40C7F1",
  placeholder = "",
  onChange = () => {},
  iconStart = "",
  iconEnd = "",
  label = "",
  height = "",
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => setIsActive(true);
  const handleBlur = (event) => {
    if (!event.target.value) {
      setIsActive(false);
    }
  };

  return (
    <StyledTextfieldContainer
      isStartIcon={iconStart ? true : false}
      isEndIcon={iconEnd ? true : false}
    >
      {label && isActive && (
        <StyledLabel isactive={isActive || !!placeholder}>{label}</StyledLabel>
      )}
      {iconStart ? (
        <StyledStartIconContainer>
          {<IconButton disabled icon={iconStart} noshadow />}
        </StyledStartIconContainer>
      ) : (
        ""
      )}
      <StyledTextfield
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={isActive ? placeholder : label}
        onChange={onChange}
        borderColor={borderColor}
        isStartIcon={iconStart ? true : false}
        isEndIcon={iconEnd ? true : false}
        height={height}
      />
      {iconEnd ? (
        <StyledEndIconContainer>
          {<IconButton disabled icon={iconEnd} noshadow />}
        </StyledEndIconContainer>
      ) : (
        ""
      )}
    </StyledTextfieldContainer>
  );
};

// ==================== Marquee ====================
const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeText = styled.div`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  animation: ${marquee} 10s linear infinite;
  @media (min-width: 500px) {
    animation: none;
  }
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  max-width: 75px;
  @media (min-width: 500px) {
    min-width: min-content;
  }
`;

export const Marquee = ({ children }) => {
  return (
    <MarqueeWrapper>
      <MarqueeText>{children}</MarqueeText>
    </MarqueeWrapper>
  );
};
