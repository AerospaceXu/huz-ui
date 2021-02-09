import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index";

test("renders <Button />", () => {
  render(<Button>Hello World!</Button>);

  const buttonElement = screen.getByText(/Hello World!/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("normal-button");
});
