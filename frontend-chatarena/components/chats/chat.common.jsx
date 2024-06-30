import styled from "styled-components";

export const StyledMainChatContainer = styled("div")(({}) => ({
  backgroundColor: "#F8FAFF",
  minWidth: "350px",
  "@media (max-width: 768px)": {
    width: "100%",
  },
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  minHeight: "500px",
  maxWidth: "350px",
}));

export const StyledTopContainer = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "row",
  margin: 17,
  justifyContent: "space-between",
  alignItems: "baseline",
}));

export const StyledChatContainer = styled("div")(
  ({ row = false, center = false }) => ({
    display: "flex",
    flexDirection: row ? "row" : "column",
    justifyContent: center ? "center" : "",
    alignItems: center ? "center" : "",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.5px",
    },
    "&:hover": {
      "&::-webkit-scrollbar": {
        width: "5px",
      },
    },
  })
);

export const StyledChatMainContainer = styled("div")(({}) => ({
  backgroundColor: "#D0ECFA",
  padding: "10px 10px",
  minHeight: "max-content",
  borderRadius: 9,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  "&:hover": {
    cursor: "pointer",
  },
}));
