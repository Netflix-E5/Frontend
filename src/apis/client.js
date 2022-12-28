import axios from "axios";

const client = axios.create({ baseURL: process.env.REACT_APP_API });

export const noneTokenClient = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const userapi = {
  signup: ({ email, password, nickname }) =>
    client.post("users/signup", {
      email: email,
      password: password,
      nickname: nickname,
    }),

  signin: ({ email, password }) =>
    client.post("users/login", { email: email, password: password }),
};

export default client;
