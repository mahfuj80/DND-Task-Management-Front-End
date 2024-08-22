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
  const axios = useAxiosSecure();
  const [tasks, setTasks] = useState([]);
  const {
    loading,
    setLoading,
    uId,
    allTasks,
    setAllTasks,
    updateTaskList,
    setUpdateTaskList,
    setBoardList,
    boardList,
  } = useAuth();
  const [openPop, setOpenPop] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({});

  // Get Task
  async function getTasks() {
    try {
      const res = await axios.get(`/tasks/${uId}`);
      console.log("all task by uid:", res.data);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  // Get Boards
  async function getBoards() {
    try {
      const res = await axios.get(`/categories/${uId}`);
      console.log("all boards:", res.data);
      setBoardList(res.data);
      if (res.data) {
        getTasks();
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  // useEffect(() => {
  //   getTasks();
  // }, [updateTaskList]);

  useEffect(() => {
    getBoards();
  }, []);

  // On Drag Update Card Category/Board
  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;

    // console.log("Drag result:", destination, source, draggableId);

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const updatedTasks = [...tasks];
    console.log(updatedTasks, 77);

    const task = updatedTasks.find((t) => t.id === draggableId * 1);

    if (task) {
      task.category = destination.droppableId;
      console.log("Task updated:", task);
      const res = await axios.put(`/tasks/update-task-category/${task.id}`, {
        category: task.category,
      });
      console.log("Update response:", res.data);
      setTasks(updatedTasks);
    } else {
      console.error("Task not found:", draggableId);
    }
  };

  // Handle Delete Single Task
  async function handleDelete(id) {
    console.log(id);
    const res = await axios.delete(`/tasks/${id}`);
    console.log(res.data);
    if (res.data.message) {
      Swal.fire({
        title: "Congrats!",
        text: `Your task Successfully deleted!`,
        icon: "success",
      });
      setUpdateTaskList((prev) => prev + 1);
    }
  }

  // Handle Update Task
  function handleUpdate(task) {
    setUpdateInfo(task);
    setOpenPop(true);
  }

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
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
          className="container flex flex-col gap-8 p-4 mx-auto todo-list md:flex-row flex-wrap w-full justify-center"
        >
          {boardList?.map((list) => {
            return (
              <Droppable droppableId={list?.boardname} key={list.id}>
                {(provided) => (
                  <div
                    className="p-4 text-white bg-[#1f1f1f] rounded-sm category md:w-1/4"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <div className="flex justify-between mb-5 md:text-3xl font-bold text-white">
                      <p>{list.boardname}</p>
                      <button className=" text-red-500">
                        <MdDeleteForever />
                      </button>
                    </div>
                    {tasks
                      .filter((task) => task.category === list.boardname)
                      .map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              className="mb-4 bg-gray-950 p-2 rounded-lg"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <div className="flex justify-between">
                                {/* Title And DadeLine */}
                                <div className=" space-y-2">
                                  <div className="">
                                    <p className="italic">Task Title:</p>
                                    <p className="text-xl font-medium">
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
          openPop ? "block" : "hidden"
        }`}
      >
        <UpdateTaskForm
          setUpdateTaskList={setUpdateTaskList}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          openPop={openPop}
          setOpenPop={setOpenPop}
          boardList={boardList}
        />
      </div>
    </>
  );
};

export default AllTask;
