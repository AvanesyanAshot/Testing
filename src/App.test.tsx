import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("рендер Hello wolrd", () => {
  render(<App />);
  const helloWorld = screen.getByText(/hello world/i);
  const btn = screen.getByRole("button");
  const input = screen.getByPlaceholderText(/input/i);

  expect(helloWorld).toBeInTheDocument();
  expect(helloWorld).toBeInTheDocument();
  expect(helloWorld).toBeInTheDocument();
});
