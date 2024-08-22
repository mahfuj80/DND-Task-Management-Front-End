// components/Sidebar.js
"use client";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import useAuth from "@/Hooks/Auth/useAuth";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import Swal from "sweetalert2";

const Sidebar = ({ setOpenTaskForm }) => {
  const { logOut, boardList, setBoardList, uId } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [openPop, setOpenPop] = useState(false);
  const [boardName, setBoardName] = useState("");
  const axios = useAxiosPublic();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  function addBoard() {
    setOpenPop(true);
  }

  async function addCategory(categoryInfo) {
    try {
      const res = await axios.post("/categories", categoryInfo);
      console.log("Category added:", res.data);
      setBoardList([]); // If you want to add the new category to the list
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Category Successfully Created",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error adding category:", error);
      // Optionally, handle errors (e.g., display an error message)
    }
  }

  function handleBoard(e) {
    e.preventDefault();
    // setBoardList((prev) => prev.concat({ boardName, id: Date.now(), uId }));

    const categoryInfo = {
      id: Date.now(),
      boardName: boardName,
      uid: uId,
    };

    addCategory(categoryInfo);
  }

  return (
    <>
      <div>
        {/* Mobile Menu Button */}
        <button
          className={`fixed py-4 px-1  text-black font-bold text-2xl rounded-full -left-2 bg-white md:hidden ${
            isOpen ? "hidden" : "md:hidden"
          }`}
          onClick={toggleSidebar}
        >
          {isOpen ? <MdArrowBackIosNew /> : <MdArrowForwardIos />}
        </button>

        {/* Sidebar */}
        <aside
          className={`md:relative absolute md:top-0  top-16 left-0 z-30 h-screen bg-black text-white transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-96"
          } md:translate-x-0 md:relative w-64`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between ">
              <h2 className="text-lg font-bold">Sidebar</h2>
              <button
                className="block px-1 py-4 -mr-4 text-2xl text-black bg-white rounded-full md:hidden"
                onClick={toggleSidebar}
              >
                {isOpen ? <MdArrowBackIosNew /> : "Menu"}
              </button>
            </div>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li onClick={() => setOpenTaskForm(true)}>
                  <button className="block px-4 py-2 bg-[#1d1d1d] hover:bg-[#161616] w-full">
                    Add Task
                  </button>
                </li>
                <li>
                  <button
                    onClick={addBoard}
                    className="block px-4 py-2 bg-[#1d1d1d] hover:bg-[#161616] w-full"
                  >
                    Add Board
                  </button>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="block px-4 py-2 bg-[#1d1d1d] hover:bg-[#161616] w-full"
                  >
                    Log Out
                  </button>
                </li>
                {/* Add more links here */}
              </ul>
            </nav>
          </div>
        </aside>

        <div
          className={`h-screen flex flex-col items-center justify-center fixed inset-0 bg-black bg-opacity-90 ${
            openPop ? "block" : "hidden"
          }`}
        >
          <button onClick={() => setOpenPop(false)}>Close</button>
          <form onSubmit={handleBoard}>
            <input
              placeholder="Add Board"
              className="text-black"
              onChange={(e) => setBoardName(e.target.value)}
            />
            <button type="submit"> Add Board</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
