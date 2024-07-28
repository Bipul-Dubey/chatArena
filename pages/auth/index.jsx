import { Button } from "@/components/buttons";
import { TextField, Typography } from "@/components/common/common";
import {
  Envelope,
  Eye,
  EyeSlash,
  Lock,
  Phone,
  User,
} from "@phosphor-icons/react";
import { useState } from "react";
import styled from "styled-components";

const StyledContainerAuth = styled("div")({
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

const StyledContainerSub = styled("div")(({ bigscreen }) => ({
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

const StyledTextFieldContainer = styled("div")({
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

const StyledContentWrapper = styled("div")({
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

function Authentications() {
  const iconSize = 22;

  const [payload, setPayload] = useState({
    is_new_account: false,
  });

  const [passwordType, setPasswordType] = useState({
    password_visible: false,
  });

  const handleUpdatePasswordVisibility = () => {
    setPasswordType((prevState) => ({
      ...prevState,
      password_visible: !prevState?.password_visible,
    }));
  };

  return (
    <StyledContainerAuth>
      <StyledContainerSub bigscreen>
        <img
          src="/login.jpg"
          alt=""
          style={{
            width: "90%",
            height: "80vh",
            borderRadius: 17,
          }}
        />
      </StyledContainerSub>
      <StyledContainerSub>
        <StyledContentWrapper>
          <Typography size="5rem" bold>
            Welcome
          </Typography>
          <Typography type="h5">We are glad to see you with us</Typography>
          <StyledTextFieldContainer>
            {!!payload?.is_new_account && (
              <>
                <TextField
                  label="Full Name"
                  iconStart={<User size={iconSize} color="inherit" />}
                />
                <TextField
                  label="Email"
                  iconStart={<Envelope size={iconSize} color="inherit" />}
                />
                <TextField
                  label="Phone"
                  iconStart={<Phone size={iconSize} color="inherit" />}
                />
              </>
            )}
            <TextField
              iconStart={<User color="inherit" size={iconSize} />}
              label="Username"
            />
            <TextField
              iconStart={<Lock color="inherit" size={iconSize} />}
              iconEnd={
                passwordType?.password_visible ? (
                  <Eye
                    onClick={handleUpdatePasswordVisibility}
                    size={iconSize}
                    color="inherit"
                  />
                ) : (
                  <EyeSlash
                    onClick={handleUpdatePasswordVisibility}
                    size={iconSize}
                    color="inherit"
                  />
                )
              }
              label="Password"
              type={passwordType?.password_visible ? "text" : "password"}
            />
            <Typography center type="h5">
              {payload?.is_new_account
                ? "Have an account? Login to existing"
                : "Don't have an account? Create a new account"}{" "}
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => {
                  setPayload((prevState) => ({
                    ...prevState,
                    is_new_account: !prevState?.is_new_account,
                  }));
                }}
              >
                {payload?.is_new_account ? "Sign in" : "Sign up"}
              </span>
            </Typography>
            {payload?.is_new_account ? (
              <Button fullwidth>Sign up</Button>
            ) : (
              <Button fullwidth>Login</Button>
            )}
          </StyledTextFieldContainer>
        </StyledContentWrapper>
      </StyledContainerSub>
    </StyledContainerAuth>
  );
}

export default Authentications;
