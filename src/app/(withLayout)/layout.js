// components/Layout.js
"use client";
import PrivateRoute from "@/components/Routes/PrivateRoutes";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <PrivateRoute>
      <div className="flex">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </PrivateRoute>
  );
};

export default Layout;
