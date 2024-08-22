import useAuth from "@/Hooks/Auth/useAuth";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const TaskForm = ({ setOpenTaskForm }) => {
  const { uId, setGetDataAgain, getDataAgain, boardList } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    trigger,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Add Task
  async function addTask(data) {
    const isValid = await trigger();

    if (isValid) {
      const res = await axiosSecure.post("/add-task", {
        ...data,
        uId,
      });
      console.log(res.data);
      if (res.data.message) {
        setGetDataAgain(!getDataAgain);
        Swal.fire({
          title: "Congrats!",
          text: `Your task Successfully added!`,
          icon: "success",
        });
        setOpenTaskForm(false);
        reset();
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(addTask)}
      className="max-w-md w-full p-10 mx-auto bg-[#ffffff] rounded-lg shadow-xl"
    >
      {/* Title */}
      <div className="mb-4">
        <label
          htmlFor="title"
          className="flex justify-between mb-2 font-bold text-black"
        >
          <p>Title</p>
          <p
            className="text-black cursor-pointer"
            onClick={() => setOpenTaskForm(false)}
          >
            X
          </p>
        </label>
        <input
          {...register("title", { required: "Title is required" })}
          id="title"
          type="text"
          className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.title && (
          <span className="text-sm text-red-500">{errors.title.message}</span>
        )}
      </div>

      {/* Description */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block mb-2 font-bold text-black"
        >
          Description
        </label>
        <textarea
          {...register("description", { required: "Description is required" })}
          id="description"
          className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.description && (
          <span className="text-sm text-red-500">
            {errors.description.message}
          </span>
        )}
      </div>

      {/* Category */}
      <div className="mb-4">
        <label htmlFor="category" className="block mb-2 font-bold text-black ">
          Category
        </label>

        <select
          id="category"
          className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-500"
          {...register("category", { required: "category is required" })}
        >
          {boardList.map((list) => {
            return (
              <option
                className="text-black"
                value={list.boardname}
                key={list.id}
              >
                {list.boardName}
              </option>
            );
          })}
        </select>
        {errors.category && (
          <span className="text-sm text-red-500">
            {errors.category.message}
          </span>
        )}
      </div>

      {/* Deadline */}
      <div className="mb-4">
        <label htmlFor="deadline" className="block mb-2 font-bold text-black">
          Deadline
        </label>
        <input
          {...register("deadline", { required: "Deadline is required" })}
          id="deadline"
          type="date"
          className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.deadline && (
          <span className="text-sm text-red-500">
            {errors.deadline.message}
          </span>
        )}
      </div>

      {/* Priority */}
      <div className="mb-4">
        <label htmlFor="priority" className="block mb-2 font-bold text-black">
          Priority
        </label>
        <select
          {...register("priority", { required: "Priority is required" })}
          id="priority"
          className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
        {errors.priority && (
          <span className="text-sm text-red-500">
            {errors.priority.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-4 py-2 w-full mt-4 font-bold text-white bg-black rounded  hover:bg-[#141414] focus:outline focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
