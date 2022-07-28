import { render, screen } from "@testing-library/react";
import App from "./App";

// take method takes 2 arguments => 1. A string = test name , 2 second one is a func
test("renders learn react link", () => {
  // ARRANGE
  render(<App />);
  // ACT => skip for now
  // ASSERT
  // const linkElement = screen.getByText("Learn react");
  const linkElement = screen.getByText(/learn react/i); //regex
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link by role", () => {
  render(<App />);
  const linkElement = screen.getByRole("link");
  expect(linkElement).toBeInTheDocument();
});
