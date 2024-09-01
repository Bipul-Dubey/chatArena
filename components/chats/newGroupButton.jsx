import { Container, Typography } from "../common/common";
import ModalContainer from "../common/top.components/ModalContainer";
import { useModal } from "../common/top.components/ModalContext";

function NewGroup({}) {
  const { openModal } = useModal();

  return (
    <Container
      row
      style={{
        margin: "20px 7px",
        alignItems: "center",
        gap: 27,
      }}
    >
      <Typography
        type="h5"
        link
        onClick={() => {
          openModal(<ModalContainer title="Create New Group"></ModalContainer>);
        }}
      >
        Create New Group
      </Typography>
    </Container>
  );
}

export default NewGroup;
