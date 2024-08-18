"use client";

import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "@/Hooks/Auth/useAuth";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic"; // Assuming you have this hook

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleSignIn, githubSignIn } = useAuth();

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image: result?.user?.photoURL,
          role: "user",
        };
        axiosPublic.post("/users", userInfo).then(() => {
          Swal.fire("Logged In", "You Successfully Logged In", "success");
          const redirectPath = router.query.redirect || "/";
          router.push(redirectPath);
        });
      })
      .catch((error) => {
        Swal.fire("Something Went Wrong!!", error.message, "error");
      });
  };

  const handleGithub = () => {
    githubSignIn()
      .then((result) => {
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image: result?.user?.photoURL,
          role: "user",
        };
        axiosPublic.post("/users", userInfo).then(() => {
          Swal.fire("Logged In", "You Successfully Logged In", "success");
          const redirectPath = router.query.redirect || "/";
          router.push(redirectPath);
        });
      })
      .catch((error) => {
        Swal.fire("Something Went Wrong!!", error.message, "error");
      });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8 text-center">
      <p className="text-xl font-bold ">Sign in with</p>
      <div className="flex gap-4">
        <button
          onClick={handleGoogle}
          className="flex items-center justify-center p-3 duration-200 ease-in-out bg-blue-500 rounded-full shadow-md transilacktion text-b hover:bg-blue-600"
        >
          <FaGoogle size={24} />
        </button>
        <button
          onClick={handleGithub}
          className="flex items-center justify-center p-3 text-black transition duration-200 ease-in-out bg-gray-800 rounded-full shadow-md hover:bg-gray-900"
        >
          <FaGithub size={24} />
        </button>
      </div>
    </div>
    
  );
};

export default SocialLogin;
