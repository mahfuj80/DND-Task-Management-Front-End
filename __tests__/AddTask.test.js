import { render, screen, fireEvent, act } from "@testing-library/react";
import TaskForm from "@/app/(withLayout)/TaskForm"; // Adjust the import path as needed
import useAuth from "@/Hooks/Auth/useAuth";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import Swal from "sweetalert2";

// Mock dependencies
jest.mock("@/Hooks/Auth/useAuth", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    uId: "testUserId",
    setGetDataAgain: jest.fn(),
    getDataAgain: false,
    boardList: [{ id: 1, boardName: "Test Board" }],
  })),
}));

const mockPost = jest.fn();
jest.mock("@/Hooks/Axios/useAxiosSecure", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    post: mockPost,
  })),
}));

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

describe("TaskForm API Interaction", () => {
  const mockSetOpenTaskForm = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call the /add-task API endpoint when the form is submitted", async () => {
    // Mock successful API response
    mockPost.mockResolvedValueOnce({
      data: { message: "Task added successfully" },
    });

    // Render the component
    render(<TaskForm setOpenTaskForm={mockSetOpenTaskForm} />);

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: "New Task" },
    });
    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: "This is a new task description" },
    });
    fireEvent.change(screen.getByLabelText(/category/i), {
      target: { value: "Test Board" },
    });
    fireEvent.change(screen.getByLabelText(/deadline/i), {
      target: { value: "2024-08-31" },
    });
    fireEvent.change(screen.getByLabelText(/priority/i), {
      target: { value: "high" },
    });

    // Submit the form
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    });

    // Debugging: Log what happens
    console.log("Mock Post Calls:", mockPost.mock.calls);

    // Verify the API call was made with the correct endpoint and data
    expect(mockPost).toHaveBeenCalledWith("/add-task", {
      title: "New Task",
      description: "This is a new task description",
      category: "Test Board",
      deadline: "2024-08-31",
      priority: "high",
      uId: "testUserId",
    });
  });
});
