import axios from "axios";

const token = localStorage.getItem("token");

const fetchProtectedResources = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

fetchProtectedResources.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("auth error (this error came from axios interceptor)");
    }
    return Promise.reject(error);
  }
);

export default fetchProtectedResources;
