"use client";

import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import SocialLogin from "@/components/SignIn/SocialLogin";
import useAuth from "@/Hooks/Auth/useAuth";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";

const RegisterPage = () => {
  const axiosPublic = useAxiosPublic();
  const router = useRouter();
  const { user, createUser, updateUserProfile } = useAuth();

  useEffect(() => {
    if (user) {
      const redirectPath = router.query.redirect || "/"; // Use query parameter for redirect path or default to '/'
      router.push(redirectPath);
    }
  }, [user, router]);

  const handleResister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");

    // Check password lengthfir
    // if (password.length < 6) {
    //   Swal.fire({
    //     title: 'Error!',
    //     text: 'Password should be at least 6 characters long.',
    //     icon: 'error',
    //     confirmButtonText: 'Ok',
    //   });
    //   return;
    // }

    // // Check for capital letter
    // if (!/[A-Z]/.test(password)) {
    //   Swal.fire({
    //     title: 'Error!',
    //     text: 'Password should contain at least one capital letter.',
    //     icon: 'error',
    //     confirmButtonText: 'Ok',
    //   });
    //   return;
    // }

    // // Check for special character
    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    //   Swal.fire({
    //     title: 'Error!',
    //     text: 'Password should contain at least one special character.',
    //     icon: 'error',
    //     confirmButtonText: 'Ok',
    //   });
    //   return;
    // }

    console.log(name);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result && result.user; // Check if result and result.user are defined
        if (loggedUser) {
          updateUserProfile(name, image)
            .then(() => {
              // create user entry in the database
              const userInfo = {
                name,
                email,
                image,
                role: "user",
              };
              console.log(userInfo);
              axiosPublic.post("/users", userInfo).then((res) => {
                if (res?.data?.insertedId) {
                  console.log("user added to the database");
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Successfully Created",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate(location?.state ? location.state : "/");
                }
              });
            })
            .catch((error) => {
              // Handle Errors here.
              const errorMessage = error.message;
              Swal.fire("Something Went Wrong!!", `${errorMessage}`, "error");
            });
        } else {
          console.error("User is undefined in the result object");
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Error: User is undefined",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        Swal.fire("Something Went Wrong!!", `${errorMessage}`, "error");
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-6 fle-col">
      <div className="  rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
        <form onSubmit={handleResister} className="space-y-4">
          {/* Heading */}
          <div className="mb-10">
            <h3 className="text-4xl font-extrabold text-center text-white">
              Sign Up
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-center text-white">
              Sign up to your account and explore a world of possibilities. Your
              journey begins here.
            </p>
          </div>

          {/* Name */}
          <div>
            <label className="block mb-2 text-sm text-white">Name:</label>
            <div className="relative flex items-center">
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 text-sm text-black border border-gray-100 rounded-lg outline-blue-600"
                placeholder="Name Here"
              />
              <MdOutlineEmail className="w-[18px] h-[18px] absolute right-4 text-black" />
            </div>
          </div>

          {/* Image Url */}
          <div>
            <label className="block mb-2 text-sm text-white">Image URL:</label>
            <div className="relative flex items-center">
              <input
                name="image"
                type="text"
                required
                className="w-full px-4 py-3 text-sm text-black border border-gray-100 rounded-lg outline-blue-600"
                placeholder="https://Image-URL....."
              />
              <MdOutlineEmail className="w-[18px] h-[18px] absolute right-4 text-black" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-white">Email:</label>
            <div className="relative flex items-center">
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 text-sm text-black border border-gray-100 rounded-lg outline-blue-600"
                placeholder="Enter Your Email Address"
              />
              <MdOutlineEmail className="w-[18px] h-[18px] absolute right-4 text-black" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm text-white">Password:</label>
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 text-sm text-black border border-gray-100 rounded-lg outline-blue-600"
                placeholder="Enter password"
              />
              <IoKeyOutline className="w-[18px] h-[18px] absolute right-4 text-black" />
            </div>
          </div>

          {/* Remember Me & Forget Password */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500"
              />
              <label
                for="remember-me"
                className="block ml-3 text-sm text-white"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/sign-up"
              className="font-semibold text-blue-500 hover:underline whitespace-nowrap"
            >
              Forget Your Password?
            </Link>
          </div>

          {/* Register Button */}
          <div className="!mt-8">
            <input
              type="submit"
              className="w-full px-4 py-3 text-lg font-semibold tracking-wide text-black bg-white rounded-lg shadow-xl hover:bg-gray-100 focus:outline focus:outline-gray-400 hover:cursor-pointer"
              value="Login"
            />
          </div>

          <SocialLogin />

          {/* Link To Login */}
          <p className="text-sm text-center text-white">
            Already have an account
            <Link
              href="/sign-in"
              className="ml-1 font-semibold text-blue-500 hover:underline whitespace-nowrap"
            >
              Login here.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
