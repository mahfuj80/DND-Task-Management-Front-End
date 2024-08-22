// "use client"
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import useAuth from "@/Hooks/Auth/useAuth";
import { useEffect } from "react";
import Loading from "@/app/loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  console.log(loading);
  useEffect(() => {
    if (!user && !loading) {
      router.push("/");
    }
  }, [user, router, loading]);

  if (!user) {
    // Render nothing or a loading spinner until the redirect happens
    <Loading />;
    return null;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
