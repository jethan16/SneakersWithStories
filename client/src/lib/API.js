import axios from "axios";
export default {
  Users: {
    login: function (email, password) {
      return axios.post("/api/users/login", { email, password });
    },
    create: function (email, password) {
      return axios.post("/api/users", { email, password });
    },
    getMe: function (authToken) {
      return axios.get("/api/users/me", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    },
  },
  Stories: {
    getAll: function () {
      return axios.get("/api/stories");
    },
    create: function (
      title,
      name,
      silhouette,
      shoes,
      gallery,
      quote,
      highlights,
      summary,
      authToken
    ) {
      return axios.post(
        "/api/stories",
        {
          title,
          name,
          silhouette,
          shoes,
          gallery,
          quote,
          highlights,
          summary,
        }
      );
    },
  },
};
