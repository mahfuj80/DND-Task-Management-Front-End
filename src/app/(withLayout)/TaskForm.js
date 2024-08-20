import useAuth from "@/Hooks/Auth/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const TaskForm = ({ openTaskForm, setOpenTaskForm }) => {
  const { loading, setLoading, tasks, setTasks, uId, setUpdateTaskList } =
    useAuth();
  const {
    register,
    trigger,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const isValid = await trigger();
    console.log({ ...data, status: "todo" });
    if (isValid) {
      const res = await axios.post("/add-task", {
        ...data,
        category: "todo",
        uId,
      });
      if (res.data.acknowledged) {
        setUpdateTaskList((prev) => prev + 1);
        Swal.fire({
          title: "Congrats!",
          text: `Your task Successfully added!`,
          icon: "success",
        });
        reset();
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md p-10 mx-auto bg-[#ffffff] rounded-lg shadow-xl"
    >
      <p
        className="text-black cursor-pointer"
        onClick={() => setOpenTaskForm(false)}
      >
        X
      </p>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="flex justify-between mb-2 font-bold text-black"
        >
          Title
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
