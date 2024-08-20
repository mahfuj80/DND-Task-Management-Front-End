"use client";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import SocialLogin from "@/components/SignIn/SocialLogin";
import useAuth from "@/Hooks/Auth/useAuth";

const SignIn = () => {
  const { signIn, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const redirectPath = router.query?.redirect || "/";
      router.push(redirectPath);
    }
  }, [user, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      await signIn(email, password);
      Swal.fire("Logged In", "You Successfully Logged In", "success");
      const redirectPath = router.query.redirect || "/";
      router.push(redirectPath);
    } catch (error) {
      const errorMessage = error.message;
      Swal.fire("Something Went Wrong!!", `${errorMessage}`, "error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-6 fle-col">
      <div className="  rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Heading */}
          <div className="mb-10">
            <h3 className="text-4xl font-extrabold text-center text-white">
              Sign in
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-center text-white">
              Sign in to your account and explore a world of possibilities. Your
              journey begins here.
            </p>
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

          {/* Login Button */}
          <div className="!mt-8">
            <input
              type="submit"
              className="w-full px-4 py-3 text-lg font-semibold tracking-wide text-black bg-white rounded-lg shadow-xl hover:bg-gray-100 focus:outline focus:outline-gray-400 hover:cursor-pointer"
              value="Login"
            />
          </div>

          <SocialLogin />

          {/* Link To Register */}
          <p className="text-sm text-center text-white">
            Don&apos;t have an account
            <Link
              href="/sign-up"
              className="ml-1 font-semibold text-blue-500 hover:underline whitespace-nowrap"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
