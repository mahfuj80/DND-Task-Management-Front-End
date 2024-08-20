
// import { Context } from "../context/AppContext";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";

// const TaskForm = () => {
//   const { loading, setLoading, tasks, setTasks, uId, setUpdateTaskList } =
//     useContext(Context);
//   const {
//     register,
//     trigger,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   async function onSubmit(data) {
//     const isValid = await trigger();
//     console.log({ ...data, status: "todo" });
//     if (isValid) {
//       const res = await axios.post("/add-task", {
//         ...data,
//         category: "todo",
//         uId,
//       });
//       if (res.data.acknowledged) {
//         setUpdateTaskList((prev) => prev + 1);
//         Swal.fire({
//           title: "Congrats!",
//           text: `Your task Successfully added!`,
//           icon: "success",
//         });
//         reset();
//       }
//     }
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-md p-6 mx-auto rounded-lg shadow-xl"
//     >
//       <div className="mb-4">
//         <label htmlFor="title" className="block mb-2 font-bold text-gray-700">
//           Title
//         </label>
//         <input
//           {...register("title", { required: "Title is required" })}
//           id="title"
//           type="text"
//           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//         />
//         {errors.title && (
//           <span className="text-sm text-red-500">{errors.title.message}</span>
//         )}
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="description"
//           className="block mb-2 font-bold text-gray-700"
//         >
//           Description
//         </label>
//         <textarea
//           {...register("description", { required: "Description is required" })}
//           id="description"
//           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//         />
//         {errors.description && (
//           <span className="text-sm text-red-500">
//             {errors.description.message}
//           </span>
//         )}
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="deadline"
//           className="block mb-2 font-bold text-gray-700"
//         >
//           Deadline
//         </label>
//         <input
//           {...register("deadline", { required: "Deadline is required" })}
//           id="deadline"
//           type="date"
//           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//         />
//         {errors.deadline && (
//           <span className="text-sm text-red-500">
//             {errors.deadline.message}
//           </span>
//         )}
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="priority"
//           className="block mb-2 font-bold text-gray-700"
//         >
//           Priority
//         </label>
//         <select
//           {...register("priority", { required: "Priority is required" })}
//           id="priority"
//           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//         >
//           <option value="low">Low</option>
//           <option value="moderate">Moderate</option>
//           <option value="high">High</option>
//         </select>
//         {errors.priority && (
//           <span className="text-sm text-red-500">
//             {errors.priority.message}
//           </span>
//         )}
//       </div>

//       <button
//         type="submit"
//         className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//       >
//         Add Task
//       </button>
//     </form>
//   );
// };

// export default TaskForm;
