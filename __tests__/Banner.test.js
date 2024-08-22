import { render, screen } from "@testing-library/react";
import Banner from "@/components/Home/Banner";

// Mock next/image to avoid issues with `fetchPriority` and image URL processing
jest.mock("next/image", () => {
  // eslint-disable-next-line react/display-name,
  return (props) => <img {...props} />;
});

describe("Banner Component", () => {
  it("should render the Banner component correctly", () => {
    render(<Banner />);

    // Check if the image is rendered with the correct alt text
    const image = screen.getByAltText(/img/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");

    // Check if Description is rendered
    const description = screen.getByText(
      /Unlock your potential with our innovative solutions/i
    );
    expect(description).toBeInTheDocument();

    // Check if Button is rendered
    const button = screen.getByText(/Get Started/i);
    expect(button).toBeInTheDocument();
  });

  it("should have the correct class names for styling", () => {
    const { container } = render(<Banner />);

    // Check if the container has the correct classes
    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass("bg-gray-800");
    expect(containerDiv).toHaveClass("font-sans");
    expect(containerDiv).toHaveClass("min-h-[350px]");
    expect(containerDiv).toHaveClass("relative");
    expect(containerDiv).toHaveClass("rounded");
    expect(containerDiv).toHaveClass("overflow-hidden");

    // Check if the content div has the correct classes
    const contentDiv = container.querySelector("div > div > div:nth-child(2)");
    expect(contentDiv).toHaveClass("flex");
    expect(contentDiv).toHaveClass("flex-col");
    expect(contentDiv).toHaveClass("items-end");
    expect(contentDiv).toHaveClass("justify-center");
    expect(contentDiv).toHaveClass("text-right");
    expect(contentDiv).toHaveClass("px-8");
    expect(contentDiv).toHaveClass("relative");
    expect(contentDiv).toHaveClass("bg-[#0b0a20]");
    expect(contentDiv).toHaveClass("rounded-tl-[206px]");
    expect(contentDiv).toHaveClass("z-20");
  });
});
