import React from "react";
import styled from "styled-components";
import { Typography } from "../common";
import { IconButton } from "@/components/buttons";
import { X } from "@phosphor-icons/react";
import { useModal } from "./ModalContext";

const ResponsiveTopContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  position: "relative",
});

const ModalWrapper = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
});

const ResponsiveContainer = styled("div")(({ width = 90 }) => ({
  position: "relative",
  minHeight: "350px",
  minWidth: "400px",
  width: `${width + 10}%`,
  maxHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxSizing: "border-box",
  overflow: "hidden",

  "@media (max-width: 768px)": {
    width: `${width}%`,
  },

  "@media (max-width: 480px)": {
    width: `${width + 5}%`,
  },
}));

const Header = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  borderBottom: "1px solid #ccc",
  backgroundColor: "#fff",
  position: "sticky",
  top: 0,
  zIndex: 10,
});

const Content = styled("div")({
  width: "100%",
  height: "100%",
  overflowY: "auto",
  padding: "20px",
  boxSizing: "border-box",
});

const ModalContainer = ({ width, children, title = "" }) => {
  const { closeModal } = useModal();

  return (
    <ResponsiveTopContainer>
      <ModalWrapper>
        <ResponsiveContainer width={width}>
          <Header>
            <Typography size="1.5rem" bold>
              {title}
            </Typography>
            <IconButton noshadow icon={<X size={24} />} onClick={closeModal} />
          </Header>
          <Content>{children}</Content>
        </ResponsiveContainer>
      </ModalWrapper>
    </ResponsiveTopContainer>
  );
};

export default ModalContainer;
