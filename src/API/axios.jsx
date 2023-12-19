import axios from "axios";
const api = axios.create({
  baseURL: "https://academics.newtonschool.co/api/v1",
  headers: { projectId: "qlapp18uwhqp" },
});
export default api;
