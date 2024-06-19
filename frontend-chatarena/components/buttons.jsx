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
      {icon ? icon : "icon"}
    </StyledIconButton>
  );
};

// Checkbox button
const StyledCheckbox = styled.input.attrs({ type: "checkbox" })(({}) => ({
  width: "20px",
  height: "20px",
  cursor: "pointer",
  "&:checked": {
    backgroundColor: "#4caf50",
  },
}));

export const CheckboxButton = ({ onClick = () => {}, checked = false }) => {
  return <StyledCheckbox type="checkbox" checked={checked} onClick={onClick} />;
};
