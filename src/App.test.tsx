/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App", () => {
  test("рендер Hello world", () => {
    render(<App />);
    const helloWorld = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input/i);

    expect(helloWorld).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    screen.debug();
  });
  test("query input", () => {
    render(<App />);
    const btn = screen.queryByText(/test/i);
    expect(btn).toBeNull();
  });

  test("find input", async () => {
    render(<App />);
    screen.debug();
    const btn = await screen.findByText(/data/i);
    expect(btn).toBeInTheDocument();
    screen.debug();
  });
});
