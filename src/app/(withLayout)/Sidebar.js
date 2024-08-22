// components/Sidebar.js
"use client";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import useAuth from "@/Hooks/Auth/useAuth";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import Swal from "sweetalert2";

const Sidebar = ({ setOpenTaskForm }) => {
  const { logOut, boardList, setBoardList, uId } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [openBoardPop, setOpenBoardPop] = useState(false);
  const axiosSecure = useAxiosSecure();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  async function addCategory(categoryInfo) {
    try {
      const res = await axiosSecure.post("/categories", categoryInfo);
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

  async function addBoard(e) {
    e.preventDefault();
    // setBoardList((prev) => prev.concat({ boardName, id: Date.now(), uId }));
    const form = new FormData(e.currentTarget);
    const boardName = form.get("boardName");
    const categoryInfo = {
      id: Date.now(),
      boardName: boardName,
      uid: uId,
    };
    try {
      const res = await axiosSecure.post("/categories", categoryInfo);
      console.log("Category added:", res.data);
      if (res.data.id) {
        setOpenBoardPop(false);
        setBoardList([]); // If you want to add the new category to the list
      }
      Swal.fire("Board Added", "Category Successfully Created", "success");
    } catch (error) {
      console.error("Error adding category:", error);
      Swal.fire("Error", "Something Went Wrong!!", "error");
      // Optionally, handle errors (e.g., display an error message)
    }
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
                    onClick={() => setOpenBoardPop(true)}
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
      </div>

      {/* Add Board Modal */}
      <div
        className={`h-screen flex flex-col items-center justify-center fixed inset-0 bg-black bg-opacity-90 ${
          openBoardPop ? "block" : "hidden"
        }`}
      >
        <div className="bg-white rounded-lg p-4 text-black relative">
          <form onSubmit={addBoard}>
            <button
              onClick={() => setOpenBoardPop(false)}
              className="absolute right-4 font-bold "
            >
              X
            </button>
            {/* Input */}
            <label
              htmlFor="boardName"
              className="block mb-2 font-bold text-black"
            >
              Board Name
            </label>
            <input
              required
              id="boardName"
              name="boardName"
              placeholder="Add Board"
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-500"
            />

            {/* Submit Button */}
            <button
              className="px-4 py-2 w-full mt-4 font-bold text-white bg-black rounded  hover:bg-[#141414] focus:outline focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
