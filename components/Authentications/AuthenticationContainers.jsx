import styled from "styled-components";

export const StyledContainerAuth = styled("div")({
  color: "#dad6d6",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    height: "auto",
  },
});

export const StyledContainerSub = styled("div")(({ bigscreen }) => ({
  width: "50%",
  minHeight: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#000",
  "@media (max-width: 1024px)": {
    width: "70%",
  },
  "@media (max-width: 768px)": {
    display: bigscreen ? "none" : "flex",
    width: "100%",
    backgroundImage: `url("/login_bg.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    minHeight: bigscreen ? "auto" : "100vh",
  },
  "@media (max-width: 480px)": {
    width: "100%",
  },
}));

export const StyledTextFieldContainer = styled("div")({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: 22,
  "@media (max-width: 768px)": {
    width: "80%",
  },
  "@media (max-width: 480px)": {
    width: "90%",
  },
  "@media (max-width: 320px)": {
    width: "100%",
  },
});

export const StyledContentWrapper = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "inherit",
  gap: 17,
  padding: "10px 0px",
  "@media (max-width: 768px)": {
    padding: "20px 0px",
  },
  "@media (max-width: 480px)": {
    padding: "10px 0px",
  },
});
