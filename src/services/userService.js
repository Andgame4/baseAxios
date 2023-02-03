import axios from "../utils/baseAxios";
const baseUrl = "user";
const getUser = async () => {
  return axios.get(`${baseUrl}`);
};
const postUser = async () => {};
const deleteUser = async (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};
const updateUser = async () => {};
export { getUser, postUser, deleteUser, updateUser };
