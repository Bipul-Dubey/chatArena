import styled from "styled-components";
import { useModal } from "./ModalContext";

const StyledModalWrapper = styled("div")(({}) => ({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
}));

const StyledModal = styled("div")(({}) => ({
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "5px",
  maxWidth: "80vw",
  maxHeight: "90vh",
  // overflowY: "scroll",
  borderRadius: 27,
}));

export default function Modal() {
  const { isOpen, closeModal, modalContent } = useModal();

  if (!isOpen) return null;

  return (
    <StyledModalWrapper onClick={closeModal}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        {modalContent}
      </StyledModal>
    </StyledModalWrapper>
  );
}
