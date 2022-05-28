import { render, screen } from "@testing-library/react";
import App from "../App";

test("Testing environment is working", () => {
  render(<App />);
  const text = screen.getByText("Hello world!");
  expect(text).toBeInTheDocument();
});
