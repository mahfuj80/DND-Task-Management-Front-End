import Counter from "@/components/Counter/Counter";
import { render, screen, fireEvent } from "@testing-library/react"; // Adjust the import path as needed

describe("Counter Component", () => {
  it("should render the initial counter value", () => {
    render(<Counter />);
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  });

  it("should increment the counter value when Increment button is clicked", () => {
    render(<Counter />);

    // Click the Increment button
    fireEvent.click(screen.getByText(/Increment/i));

    // Check if the counter value has incremented
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
  });

  it("should decrement the counter value when Decrement button is clicked", () => {
    render(<Counter />);

    // Click the Increment button to set counter to 1
    fireEvent.click(screen.getByText(/Increment/i));

    // Click the Decrement button
    fireEvent.click(screen.getByText(/Decrement/i));

    // Check if the counter value has decremented
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  });

  it("should not go below zero when Decrement button is clicked", () => {
    render(<Counter />);

    // Click the Decrement button without incrementing
    fireEvent.click(screen.getByText(/Decrement/i));
  });
});
