import Axios from "axios";

const RequestService = Axios.create({
  baseURL: "http://localhost:3001"
});

export default RequestService;
