import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const searchUser = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data: ", error.response.data);
    throw error;
  }
};
