import { loginUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";

export const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    await loginUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Loggin you in ..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};
