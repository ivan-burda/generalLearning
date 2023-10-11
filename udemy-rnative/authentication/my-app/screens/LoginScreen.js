import { loginUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import { Alert } from "react-native";

export const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await loginUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Cannot login. Please check credentials",
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Loggin you in ..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};
