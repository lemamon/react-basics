import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

const getUsers = async () => {
  const { data } = await API.get(`/users`);
  return data;
};

const getAlbumByUserId = async ({ id }) => {
  const { data } = await API.get(`/albums?userId=${id}`);
  return data;
};

export { getUsers, getAlbumByUserId };
