import styled from "styled-components";

const StyledIconButton = styled("div")(
  ({
    size = "35px",
    isactive = false,
    noshadow = false,
    disabled = false,
  }) => ({
    cursor: disabled ? "" : "pointer",
    padding: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: disabled ? "" : isactive ? "#40C7F1" : "#dcdee1",
    },
    height: size,
    width: size,
    backgroundColor: isactive ? "#40C7F1" : "",
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
}) => {
  return (
    <StyledIconButton
      disabled={disabled}
      isactive={isactive}
      size={size}
      onClick={disabled ? () => {} : onClick}
      noshadow={noshadow}
    >
      {icon ? icon : "icon"}
    </StyledIconButton>
  );
};
