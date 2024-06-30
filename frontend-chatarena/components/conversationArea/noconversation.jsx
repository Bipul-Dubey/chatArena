import { handleUpdateToggleLeftBar } from "@/store/services/app";
import { Typography } from "../common/common";
import { LEFT_BAR } from "@/constants/appConstant";

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
      <Typography type="h4">
        Select a conversation or{" "}
        <span
          onClick={() => {
            handleUpdateToggleLeftBar(LEFT_BAR.TYPE.ALL_CONTACTS);
          }}
          style={{
            color: "#244ddf",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          start a new one
        </span>
      </Typography>
    </div>
  );
};

export default Noconversation;
