import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import UpdateTaskForm from "./UpdateTaskForm";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import useAuth from "@/Hooks/Auth/useAuth";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";

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
  } = useAuth();
  const [openPop, setOpenPop] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({});

  async function getTasks() {
    try {
      const res = await axios.get(`/tasks/${uId}`);
      console.log("all task by uid:", res.data);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }
  useEffect(() => {
    getTasks(); // Call the function here
  }, []);

  useEffect(() => {
    getTasks();
  }, [updateTaskList]);

  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;

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
    const task = updatedTasks.find((t) => t.id === draggableId);
    task.category = destination.droppableId;
    console.log(task.category, destination.droppableId, updatedTasks);
    // console.log(task);
    const res = await axios.put(`/tasks/update-task-category/${task.id}`, {
      category: task.category,
    });
    // console.log(res.data);
    setTasks(updatedTasks);
  };

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

  function handleUpdate(task) {
    setUpdateInfo(task);
    setOpenPop(true);
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
          className="container flex flex-col gap-10 p-4 mx-auto todo-list md:flex-row"
        >
          <Droppable droppableId="todo">
            {(provided) => (
              <div
                className="p-4 text-white bg-blue-700 rounded-sm category md:w-1/3"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="mb-5 text-4xl font-bold text-yellow-400">
                  Todo
                </h2>
                {tasks
                  .filter((task) => task.category === "todo")
                  .map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="mb-4 task"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div className="flex flex-row items-center justify-between gap-2">
                            <div className="flex-1">
                              <p>Task Title</p>
                              <p>{task.title}</p>
                            </div>
                            <div className="flex-1">
                              <p>Due date</p>
                              <p>{task.deadline}</p>
                            </div>
                            <button
                              onClick={() => handleUpdate(task)}
                              className="h-auto p-2 ml-2 btn min-h-min"
                            >
                              <FaRegEdit />
                            </button>
                            <button
                              className="h-auto p-2 btn min-h-min"
                              onClick={() => handleDelete(task.id)}
                            >
                              <MdDeleteForever />
                            </button>
                          </div>
                          <div>
                            <p>Task Description</p>
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

          <Droppable droppableId="ongoing">
            {(provided) => (
              <div
                className="p-4 text-white bg-blue-700 rounded-sm category md:w-1/3"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="mb-5 text-4xl font-bold text-yellow-400">
                  Ongoing
                </h2>
                {tasks
                  .filter((task) => task.category === "ongoing")
                  .map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="mb-4 task"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div className="flex flex-row items-center justify-between gap-2">
                            <div className="flex-1">
                              <p>Task Title</p>
                              <p>{task.title}</p>
                            </div>
                            <div className="flex-1">
                              <p>Due date</p>
                              <p>{task.deadline}</p>
                            </div>
                            <button
                              onClick={() => handleUpdate(task)}
                              className="h-auto p-2 ml-2 btn min-h-min"
                            >
                              <FaRegEdit />
                            </button>
                            <button
                              className="h-auto p-2 btn min-h-min"
                              onClick={() => handleDelete(task.id)}
                            >
                              <MdDeleteForever />
                            </button>
                          </div>
                          <div className="">
                            <p>Task description</p>
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
          <Droppable droppableId="done">
            {(provided) => (
              <div
                className="p-4 text-white bg-blue-700 rounded-sm category md:w-1/3"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="mb-5 text-4xl font-bold text-yellow-400">
                  Done
                </h2>
                {tasks
                  .filter((task) => task.category === "done")
                  .map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="mb-4 task"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div className="flex flex-row items-center justify-between gap-2 ">
                            <div className="flex-1">
                              <p>Task Title</p>
                              <p>{task.title}</p>
                            </div>
                            <div className="flex-1">
                              <p>Due date</p>
                              <p>{task.deadline}</p>
                            </div>
                            <button
                              onClick={() => handleUpdate(task)}
                              className="h-auto p-2 ml-2 btn min-h-min"
                            >
                              <FaRegEdit />
                            </button>
                            <button
                              className="h-auto p-2 btn min-h-min"
                              onClick={() => handleDelete(task.id)}
                            >
                              <MdDeleteForever />
                            </button>
                          </div>
                          <div className="flex-1">
                            <p>Task Description</p>
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
        </motion.div>
      </DragDropContext>
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
        />
      </div>
    </>
  );
};

export default AllTask;
