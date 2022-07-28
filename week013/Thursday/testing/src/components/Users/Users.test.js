import Users from "./Users";
import { render, screen } from "@testing-library/react";

test("render users", async () => {
  //ARRANGE
  render(<Users />);
  //ASSERTION
  const usersListItems = await screen.findAllByRole("listitem");
  expect(usersListItems).toHaveLength(10);
});

//Mock
test("renders test with mock fetcher", async () => {
  //ARRANGE
  window.fetch = jest.fn(); // mock function
  window.fetch.mockResolvedValueOnce({
    json: async () => [
      { id: 1, name: "John" },
      { id: 2, name: "Emma" },
    ],
  });
  render(<Users />);

  const usersListItems = await screen.findAllByRole("listitem");
  expect(usersListItems).not.toHaveLength(0);
  expect(usersListItems).toHaveLength(2);
});
