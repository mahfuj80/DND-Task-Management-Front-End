"use client";
import PrivateRoute from "@/components/Routes/PrivateRoutes";
import Sidebar from "./Sidebar";
import { useState } from "react";
import TaskForm from "./TaskForm";

const Layout = ({ children }) => {
  const [openTaskForm, setOpenTaskForm] = useState(false);

  return (
    <PrivateRoute>
      <div className="flex">
        <Sidebar setOpenTaskForm={setOpenTaskForm} />
        <main className="w-full">{children}</main>
      </div>
      <div
        className={`h-screen flex flex-col items-center justify-center fixed inset-0 bg-black bg-opacity-90 ${
          openTaskForm ? "block" : "hidden"
        }`}
      >
        <TaskForm
          openTaskForm={openTaskForm}
          setOpenTaskForm={setOpenTaskForm}
        />
      </div>
    </PrivateRoute>
  );
};

export default Layout;
