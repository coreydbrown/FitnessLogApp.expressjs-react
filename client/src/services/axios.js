import axios from "axios";

const token = localStorage.getItem("token");

const fetchProtectedResources = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default fetchProtectedResources;
