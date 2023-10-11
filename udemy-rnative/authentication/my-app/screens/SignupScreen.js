import AuthContent from "../components/Auth/AuthContent";
import { createUser, loginUser } from "../util/auth";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

export const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "User creation failed",
        "Cannot create a new user. Please check entered data and try again",
      );
    }

    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating a user ..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
};
