import { Greeting } from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Greeting /> component testing render by text", () => {
  test("Hello world", () => {
    render(<Greeting />);
    const anchorElement = screen.getByText(/hello world/i);
    expect(anchorElement).toBeInTheDocument();
  });
});

describe("<Greeting /> component testing render by role", () => {
  test("Hello world by role", () => {
    render(<Greeting />);
    const anchorElement = screen.getByRole("heading");
    expect(anchorElement).toBeInTheDocument();
  });
  test("Hello world by data test id", () => {
    render(<Greeting />);
    const anchorElement = screen.getByTestId("title");
    expect(anchorElement).toBeInTheDocument();
  });
});

describe("test the button functions", () => {
  test("renders Welcome to the page if btn not clicked", () => {
    render(<Greeting />);
    const paragraph = screen.getByText(/Welcome to the page!/i);
    expect(paragraph).toBeInTheDocument();
  });

  test("renders See you later! if btn clicked", () => {
    //ARRANGE
    render(<Greeting />);
    //ACT
    const button = screen.getByRole("button");
    userEvent.click(button);
    //ASSERTION
    const paragraph = screen.getByText(/See you later!/i);
    expect(paragraph).toBeInTheDocument();
  });

  test("doesn't render Welcome to the page! if btn clicked", () => {
    //ARRANGE
    render(<Greeting />);
    //ACT
    const button = screen.getByRole("button");
    userEvent.click(button);
    //ASSERTION
    const paragraph = screen.queryByText(/Welcome to the page!/i);
    expect(paragraph).toBeNull();
  });
});
