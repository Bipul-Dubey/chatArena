import { Typography } from "../common/common";

const Noconversation = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        minHeight: "100%",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={"/nochat.jpg"}
        height={"80%"}
        width={"80%"}
        alt="nochat"
        style={{ objectFit: "contain" }}
      />
      <Typography type="h4">Select a conversation to start a chat</Typography>
    </div>
  );
};

export default Noconversation;
