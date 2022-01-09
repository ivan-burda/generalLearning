import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Greeting } from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello world as a text", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //... no action in this test

    //Assert
    const helloWorldElement = screen.getByText(/Hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders 'It's good to see you!' if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText(/It's good to see you!/i);
    expect(outputElement).toBeInTheDocument();
  });
  test("renders 'Changed!' if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.getByText(/changed!/i);
    expect(outputElement).toBeInTheDocument();
  });
  test("does not render 'It's good to see you!' if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.queryByText(/It's good to see you!/i);
    expect(outputElement).toBeNull();
  });
});
