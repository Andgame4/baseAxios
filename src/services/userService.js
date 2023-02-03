import axios from "../utils/baseAxios";
const baseUrl = "user";
const getUser = async () => {
  return await axios.get(`${baseUrl}`);
};
const postUser = async (name) => {
  return await axios.post(`${baseUrl}`, { name });
};
const deleteUser = async (id) => {
  return await axios.delete(`${baseUrl}/${id}`);
};
const updateUser = async (id, name) => {
  return await axios.put(`${baseUrl}/${id}`, { name });
};
export { getUser, postUser, deleteUser, updateUser };
