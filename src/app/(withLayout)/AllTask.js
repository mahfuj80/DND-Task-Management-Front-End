import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import UpdateTaskForm from "./UpdateTaskForm";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import useAuth from "@/Hooks/Auth/useAuth";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import Loading from "../loading";

const AllTask = () => {
  const axiosSecure = useAxiosSecure();
  const [tasks, setTasks] = useState([]);
  const {
    loading,
    uId,
    setBoardList,
    boardList,
    getDataAgain,
    setGetDataAgain,
  } = useAuth();
  const [openUpdateForm, setOpenUpdateForm] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({});

  // Get Task
  async function getTasks() {
    try {
      const res = await axiosSecure.get(`/tasks/${uId}`);
      console.log("all task by uid:", res.data);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  //Update Task
  function handleUpdate(task) {
    setUpdateInfo(task);
    setOpenUpdateForm(true);
  }

  //Delete Single Task
  async function handleDelete(id) {
    try {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "This action will delete the task and cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      });

      // Proceed if the user confirmed the action
      if (result.isConfirmed) {
        console.log(id);

        // Perform the delete operation
        const res = await axiosSecure.delete(`/tasks/${id}`);
        console.log(res.data);

        if (res.data.message) {
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been successfully deleted.",
            icon: "success",
          });
          setGetDataAgain(!getDataAgain);
        }
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      Swal.fire({
        title: "Error!",
        text: "There was a problem deleting the task. Please try again later.",
        icon: "error",
      });
    }
  }

  // Get Boards
  async function getBoards() {
    try {
      const res = await axiosSecure.get(`/categories/${uId}`);
      console.log("all boards:", res.data);
      setBoardList(res.data);
      if (res.data) {
        getTasks();
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  // Delete Boards
  async function deleteBoard(boardId) {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "This action will delete the board and all associated tasks. This cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        // Send DELETE request to backend
        const response = await axiosSecure.delete(`/categories/${boardId}`);

        // Show success message
        Swal.fire({
          title: "Deleted!",
          text: response.data.message,
          icon: "success",
        });
        setGetDataAgain(!getDataAgain);
        // Optionally, you can refresh the board board or perform other actions here
        // Example: setBoardList((prev) => prev.filter((board) => board.id !== boardId));
      }
    } catch (error) {
      console.error("Error deleting board:", error);

      // Show error message
      Swal.fire({
        title: "Error!",
        text: "There was a problem deleting the board. Please try again later.",
        icon: "error",
      });
    }
  }

  useEffect(() => {
    getBoards();
  }, [getDataAgain, getDataAgain]);

  // On Drag Update Card Category/Board
  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;

    console.log(result);

    // If there's no destination, do nothing
    if (!destination) return;

    // If the task is dropped in the same position, do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Clone the tasks array to avoid mutating the state directly
    const updatedTasks = Array.from(tasks);

    // Find the dragged task index
    const taskIndex = updatedTasks.findIndex(
      (t) => t.id === parseInt(draggableId, 10)
    );
    const task = updatedTasks[taskIndex];

    if (task) {
      // Remove the task from its original position
      updatedTasks.splice(taskIndex, 1);

      // Update the task category if it is moved to a different board
      if (task.category !== destination.droppableId) {
        task.category = destination.droppableId;
      }

      // Insert the task into its new position
      updatedTasks.splice(destination.index, 0, task);

      // Ensure the keys are unique by using task.id as the key
      const newTasks = updatedTasks.map((task) => ({
        ...task,
        key: task.id, // Ensure each task has a unique key
      }));

      console.log(newTasks);

      // Trying To Find Updated Tasks Index

      // Optimistically update the UI
      setTasks(newTasks);

      try {
        const response = await axiosSecure.put(
          `/tasks/update-task-category/${uId}`,
          {
            tasks, // Send the tasks array in the request body
          }
        );

        // Handle the response if needed
        console.log("Tasks updated successfully:", response.data);
      } catch (error) {
        // Handle errors
        console.error("Error updating tasks:", error);
      }
    } else {
      console.error("Task not found:", draggableId);
    }
  };

  // Loading User
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      {/* All Boards  */}
      <DragDropContext onDragEnd={onDragEnd}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="container flex flex-col gap-8 p-4 mx-auto todo-board md:flex-row flex-wrap w-full justify-center"
        >
          {/* Single Board */}
          {boardList?.map((board) => {
            return (
              <Droppable droppableId={board?.boardname} key={board.id}>
                {(provided) => (
                  <div
                    className="p-4 text-white bg-[#1f1f1f] rounded-sm category md:w-1/4"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <div className="flex justify-between mb-5 md:text-3xl font-bold text-white">
                      <p>{board.boardname}</p>
                      <button
                        onClick={() => deleteBoard(board.id)}
                        className=" text-red-300 hover:text-red-500"
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                    {tasks
                      .filter((task) => task.category === board.boardname)
                      .map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              className="mb-4 bg-gray-950 p-2 rounded-lg overflow-hidden"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <div className="flex justify-between">
                                {/* Title And Deadline */}
                                <div className=" space-y-2">
                                  <div className="">
                                    <p className="italic">Task Title:</p>
                                    <p className="text-xl font-medium break-all">
                                      {task.title}
                                    </p>
                                  </div>
                                  <div className="flex gap-2">
                                    <p className="font-medium italic">
                                      Deadline:
                                    </p>
                                    <p>{task.deadline}</p>
                                  </div>
                                </div>
                                {/* Action Button  */}
                                <div className="flex flex-col items-center gap-2">
                                  <button
                                    onClick={() => handleUpdate(task)}
                                    className="h-auto p-2 ml-2 min-h-min bg-[#313131] hover:bg-[#383838] rounded-lg "
                                  >
                                    <FaRegEdit />
                                  </button>
                                  <button
                                    className="h-auto p-2 ml-2 min-h-min bg-[#313131] hover:bg-[#383838] hover:text-red-500 rounded-lg "
                                    onClick={() => handleDelete(task.id)}
                                  >
                                    <MdDeleteForever />
                                  </button>
                                </div>
                              </div>

                              {/* Description */}
                              <div className="mt-2 ">
                                <p className="italic">Task Description:</p>
                                <p>{task.description}</p>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
        </motion.div>
      </DragDropContext>

      {/* Modal For Update Task */}
      <div
        className={`h-screen flex flex-col items-center justify-center fixed inset-0 bg-black bg-opacity-90 ${
          openUpdateForm ? "block" : "hidden"
        }`}
      >
        <UpdateTaskForm
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          openUpdateForm={openUpdateForm}
          setOpenUpdateForm={setOpenUpdateForm}
          boardList={boardList}
        />
      </div>
    </>
  );
};

export default AllTask;
