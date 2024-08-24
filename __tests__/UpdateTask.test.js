import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import UpdateTaskForm from "@/app/(withLayout)/UpdateTaskForm";
import Swal from "sweetalert2";
import useAuth from "@/Hooks/Auth/useAuth";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";

// Mock `useAxiosSecure`
jest.mock("@/Hooks/Axios/useAxiosSecure", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    put: jest.fn(),
  })),
}));

// Mock `Swal.fire`
jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

// Mock `useAuth`
jest.mock("@/Hooks/Auth/useAuth", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    getDataAgain: false,
    setGetDataAgain: jest.fn(),
  })),
}));

describe("UpdateTaskForm", () => {
  const mockPut = jest.fn();
  const mockSetUpdateInfo = jest.fn();
  const mockSetOpenUpdateForm = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useAxiosSecure.mockReturnValue({ put: mockPut });
    useAuth.mockReturnValue({
      getDataAgain: false,
      setGetDataAgain: jest.fn(),
    });
  });

  it("should call the API with correct data on form submission", async () => {
    // Mock successful API response
    mockPut.mockResolvedValueOnce({
      data: { message: "Task updated successfully" },
    });

    // Render the component
    render(
      <UpdateTaskForm
        updateInfo={{
          id: "123",
          title: "Existing Task",
          description: "Existing Description",
          deadline: "2024-08-01",
          priority: "low",
          category: "board1",
        }}
        setUpdateInfo={mockSetUpdateInfo}
        setOpenUpdateForm={mockSetOpenUpdateForm}
        boardList={[
          { id: "1", boardName: "Board 1", boardname: "board1" },
          { id: "2", boardName: "Board 2", boardname: "board2" },
        ]}
      />
    );

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/Title/i), {
      target: { value: "New Task" },
    });
    fireEvent.change(screen.getByLabelText(/Description/i), {
      target: { value: "This is a new task description" },
    });
    fireEvent.change(screen.getByLabelText(/Category/i), {
      target: { value: "board2" },
    });
    fireEvent.change(screen.getByLabelText(/Deadline/i), {
      target: { value: "2024-08-31" },
    });
    fireEvent.change(screen.getByLabelText(/Priority/i), {
      target: { value: "high" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/Update Task/i));

    // Wait for the API call to be processed
    await waitFor(() => {
      // Verify the API call was made with the correct endpoint and data
      expect(mockPut).toHaveBeenCalledWith("/tasks/update-task/123", {
        deadline: "2024-08-31",
        description: "This is a new task description",
        priority: "high",
        title: "New Task",
        category: "board2",
      });
    });

    // Verify Swal alert
    expect(Swal.fire).toHaveBeenCalledWith({
      title: "Congrats!",
      text: "Your task Successfully updated!",
      icon: "success",
    });
  });
});
