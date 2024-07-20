import styled from "styled-components";

const StyledIconButton = styled("div")(
  ({
    size = "35px",
    isactive = false,
    noshadow = false,
    disabled = false,
    borderRadius = "50%",
    backgroundColor = "",
  }) => ({
    cursor: disabled ? "" : "pointer",
    padding: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: borderRadius,
    "&:hover": {
      backgroundColor: disabled ? "" : isactive ? "#40C7F1" : "#dcdee1",
    },
    height: size,
    width: size,
    backgroundColor: isactive ? "#40C7F1" : backgroundColor,
    boxShadow: noshadow ? "" : "2px 2px 6px #d5d5d5, -2px -2px 6px #ebebeb",
  })
);

export const IconButton = ({
  icon = "",
  onClick = () => {},
  size = "35px",
  isactive = false,
  noshadow = false,
  disabled = false,
  borderRadius = "50%",
  backgroundColor = "",
}) => {
  return (
    <StyledIconButton
      disabled={disabled}
      isactive={isactive}
      size={size}
      onClick={disabled ? () => {} : onClick}
      noshadow={noshadow}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
    >
      {icon ? icon : ""}
    </StyledIconButton>
  );
};

// Checkbox button
const StyledCheckbox = styled.input.attrs({ type: "checkbox" })(
  ({ small = false, size = "20px" }) => ({
    width: small ? "15px" : size,
    height: small ? "15px" : size,
    cursor: "pointer",
    "&:checked": {
      backgroundColor: "#4caf50",
    },
  })
);

export const CheckboxButton = ({
  onClick = () => {},
  checked = false,
  small = false,
}) => {
  return <StyledCheckbox checked={checked} onClick={onClick} small={small} />;
};

// radio buttons
const StyledRadioButton = styled.input.attrs({ type: "radio" })(
  ({ small = false, size = "20px" }) => ({
    width: small ? "15px" : size,
    height: small ? "15px" : size,
    cursor: "pointer",
    "&:checked": {
      backgroundColor: "#4caf50",
    },
  })
);

export const RadioButton = ({
  checked = false,
  onClick = () => {},
  ...props
}) => {
  return <StyledRadioButton checked={checked} onClick={onClick} {...props} />;
};

// === buttons ===
const StyledButton = styled("button")(({ btnColor }) => ({
  padding: 5,
  fontSize: "1.1rem",
  borderRadius: 7,
  border: btnColor.border ? `1px solid ${btnColor.border}` : "0px",
  backgroundColor: btnColor.bgColor,
  color: btnColor.textColor,
  boxShadow: btnColor.shadow,
  height: "33px",
  width: "80px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: btnColor.hoverBgColor,
    color: btnColor.hoverTextColor,
  },
  "&:active": {
    transform: "scale(1.05)",
  },
}));

export const Button = ({ children, type = "primary" }) => {
  const buttonBgColor = {
    primary: {
      bgColor: "#1464e3",
      shadow: "",
      textColor: "#fff",
      hoverBgColor: "",
      hoverTextColor: "",
    },
    secondary: {
      bgColor: "#ffffff",
      shadow: "",
      textColor: "#000000",
      border: "#000",
      hoverBgColor: "",
      hoverTextColor: "",
    },
  };
  return (
    <StyledButton btnColor={buttonBgColor[type] || {}}>{children}</StyledButton>
  );
};
