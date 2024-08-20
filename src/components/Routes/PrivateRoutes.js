// "use client"
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import useAuth from "@/Hooks/Auth/useAuth";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push(`/sign-in`);
    }
  }, [user, router]);

  if (!user) {
    // Render nothing or a loading spinner until the redirect happens
    return null;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
