"use Client";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import useAuth from "@/Hooks/Auth/useAuth";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    // Save the current path to redirect after login

    router.push(`/`);
    return null;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
