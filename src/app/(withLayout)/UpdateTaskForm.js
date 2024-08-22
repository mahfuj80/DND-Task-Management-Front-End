import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "@/Hooks/Auth/useAuth";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";

const UpdateTaskForm = ({
  updateInfo,
  setUpdateInfo,
  setOpenUpdateForm,
  boardList,
}) => {
  const { getDataAgain, setGetDataAgain } = useAuth();
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
    const { deadline, description, priority, title, category } = data;
    if (isValid) {
      const res = await axiosSecure.put(`/tasks/update-task/${updateInfo.id}`, {
        deadline,
        description,
        priority,
        title,
        category,
      });
      if (res.data) {
        setUpdateInfo({});
        setOpenUpdateForm(false);
        setGetDataAgain(!getDataAgain);
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
      {/* Title */}
      <div className="mb-4">
        <label
          htmlFor="title"
          className="flex justify-between mb-2 font-bold text-gray-700"
        >
          <p>Title</p>
          <p
            className="text-black cursor-pointer"
            onClick={() => setOpenUpdateForm(false)}
          >
            X
          </p>
        </label>
        <input
          placeholder={updateInfo.title}
          {...register("title", { required: "Title is required" })}
          id="title"
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
        />
        {errors.title && (
          <span className="text-sm text-red-500">{errors.title.message}</span>
        )}
      </div>

      {/* Description */}
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
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
        />
        {errors.description && (
          <span className="text-sm text-red-500">
            {errors.description.message}
          </span>
        )}
      </div>

      {/* Category / Board */}
      <div className="mb-4">
        <label htmlFor="category" className="mb-2 font-bold text-black ">
          Category
        </label>

        <select
          id="category"
          className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none "
          {...register("category", { required: "category is required" })}
        >
          {boardList.map((list) => {
            return (
              <option value={list.boardname} key={list.id}>
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

      {/* Dateline */}
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
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
        />
        {errors.deadline && (
          <span className="text-sm text-red-500">
            {errors.deadline.message}
          </span>
        )}
      </div>

      {/* Priority */}
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
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
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
        Update Task
      </button>
    </form>
  );
};

export default UpdateTaskForm;
