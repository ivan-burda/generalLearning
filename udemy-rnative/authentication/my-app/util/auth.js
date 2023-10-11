import axios from "axios";

const API_KEY = "AIzaSyDD2Viu1d9yG8It5kSBrCHa3BaKu_rZj6g";
const URL = "https://identitytoolkit.googleapis.com/v1/accounts:";

export const authenticate = async (mode, email, password) => {
  const address = `${URL}${mode}?key=${API_KEY}`;
  const response = await axios.post(address, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data.idToken);
  return response.data.idToken;
};

export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};

export const loginUser = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
