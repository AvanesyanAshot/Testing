/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent } from "@testing-library/react";
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
  });

  test("Click event", () => {
    render(<App />);
    const btn = screen.getByTestId("toggle-btn");
    expect(btn).toBeInTheDocument();
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });
  test("Input event", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input/i);
    expect(input).toBeInTheDocument();
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    fireEvent.input(input, { target: { value: "Test" } });
    expect(screen.queryByTestId("value-elem")).toContainHTML("Test");
  });
});
