import axios from "axios";
import useAuth from "../Auth/useAuth";
import { useRouter } from "next/navigation";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const router = useRouter();
  const { logOut } = useAuth();
  // request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log('request stopped by interceptors', token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response?.status;
      console.log(`status error in the interceptor `, status);
      if (status === 401 || status === 403) {
        await logOut();
        router.push("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};
export default useAxiosSecure;
