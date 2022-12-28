import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_URL}`,
});

export const apis = {
  signup: ({ email, password, nickname }) =>
    api.post("users/signup", {
      email: email,
      password: password,
      nickname: nickname,
    }),
};
