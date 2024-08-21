import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "@/Hooks/Auth/useAuth";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";

const UpdateTaskForm = ({
  updateInfo,
  setUpdateInfo,
  openPop,
  setOpenPop,
  setUpdateTaskList,
}) => {
  const { loading, setLoading, tasks, setTasks, uId } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    trigger,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const isValid = await trigger();
    const { deadline, description, priority, title } = data;
    if (isValid) {
      const res = await axiosSecure.put(`/tasks/update-task/${updateInfo.id}`, {
        deadline,
        description,
        priority,
        title,
      });
      if (res.data) {
        setUpdateInfo({});
        setOpenPop(false);
        setUpdateTaskList((prev) => prev + 1);
        Swal.fire({
          title: "Congrats!",
          text: `Your task Successfully updated!`,
          icon: "success",
        });
        reset();
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-xl"
    >
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2 font-bold text-gray-700">
          <p>Title</p>
          <p
            className="text-black cursor-pointer"
            onClick={() => setOpenPop(false)}
          >
            X
          </p>
        </label>
        <input
          placeholder={updateInfo.title}
          {...register("title", { required: "Title is required" })}
          id="title"
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.title && (
          <span className="text-sm text-red-500">{errors.title.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block mb-2 font-bold text-gray-700"
        >
          Description
        </label>
        <textarea
          placeholder={updateInfo.description}
          {...register("description", { required: "Description is required" })}
          id="description"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.description && (
          <span className="text-sm text-red-500">
            {errors.description.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="deadline"
          className="block mb-2 font-bold text-gray-700"
        >
          Deadline
        </label>
        <input
          placeholder={updateInfo.deadline}
          {...register("deadline", { required: "Deadline is required" })}
          id="deadline"
          type="date"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.deadline && (
          <span className="text-sm text-red-500">
            {errors.deadline.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="priority"
          className="block mb-2 font-bold text-gray-700"
        >
          Priority
        </label>
        <select
          {...register("priority", { required: "Priority is required" })}
          id="priority"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
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
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Update Task
      </button>
    </form>
  );
};

export default UpdateTaskForm;
