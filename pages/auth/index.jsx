import {
  StyledContainerAuth,
  StyledContainerSub,
  StyledContentWrapper,
  StyledTextFieldContainer,
} from "@/components/Authentications/AuthenticationContainers";
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
import { useRouter } from "next/router";
import { useState } from "react";

function Authentications() {
  const router = useRouter();
  // === constant data ===
  const iconSize = 22;

  // ===  State ===
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
              <Button
                fullwidth
                onClick={() => {
                  router.push("/dashboard");
                }}
              >
                Login
              </Button>
            )}
          </StyledTextFieldContainer>
        </StyledContentWrapper>
      </StyledContainerSub>
    </StyledContainerAuth>
  );
}

export default Authentications;
