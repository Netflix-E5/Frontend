import axios from "axios";

const client = axios.create({ baseURL: process.env.REACT_APP_API });

export const noneTokenClient = axios.create({
  baseURL: process.env.REACT_APP_API,
});

client.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  config.headers["token"] = `${accessToken}`;
  return config;
});

export const userapi = {
  signup: ({ email, password, nickname }) =>
    client.post(`users/signup`, {
      email: email,
      password: password,
      nickname: nickname,
    }),
  signin: ({ email, password }) =>
    client.post(`users/login`, { email: email, password: password }),
};

export const contentsapi = {
  getContentsByViewAsc: () => client.get(`/contents/views`),
  getContentsByGenre: () => client.get(`/contents/genre`),
  getContentsByRating: () => client.get(`/contents/rating`),
  getContentsDetail: (contentsId) => client.get(`/contents/${contentsId}`),
  getContentsEpisodes: ({ contentsId, season }) =>
    client.get(`/contents/${contentsId}/season/${season}`),
  postCountViews: (contentsId) => client.post(`/contents/${contentsId}/views`),
};

export default client;
