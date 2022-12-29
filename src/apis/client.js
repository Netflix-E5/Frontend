import axios from "axios";

const client = axios.create({ baseURL: process.env.REACT_APP_API });

export const noneTokenClient = axios.create({
  baseURL: process.env.REACT_APP_API,
});

client.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("access-token");
    config.headers["access-token"] = `${accessToken}`;
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

function sendRefreshTokenRequest(refreshToken, accessToken) {
  const config = {
    headers: {
      "access-token": accessToken,
      "refresh-token": refreshToken,
    },
  };

  return client.get("users/getToken", config);
}

client.interceptors.response.use(
  (response) => {
    const refreshToken = localStorage.getItem("refresh-token");
    const accessToken = localStorage.getItem("access-token");
    const storedExpiration = localStorage.getItem("access-token-expiration");

    if (storedExpiration && storedExpiration < Date.now()) {
      sendRefreshTokenRequest(refreshToken, accessToken).then((response) => {
        console.log(response.headers);
        localStorage.setItem("access-token", response.headers["access-token"]);
        const newExpirationTime = Date.now() + 15 * 60 * 1000;
        localStorage.setItem("access-token-expiration", newExpirationTime);
      });
    }
    return response;
  },
  (error) => {
    window.alert("토큰이 만료되었습니다. 다시로그인해주시길 바랍니다");
    window.location.href = "http://localhost:3000/signin";
    return Promise.reject(error);
  }
);

export const userapi = {
  signup: ({ email, password, nickname }) =>
    noneTokenClient.post(`users/signup`, {
      email: email,
      password: password,
      nickname: nickname,
    }),
  signin: ({ email, password }) =>
    noneTokenClient.post(`users/login`, { email: email, password: password }),
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
