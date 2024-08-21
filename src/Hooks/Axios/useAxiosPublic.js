import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://dnd-task-management-backend.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
