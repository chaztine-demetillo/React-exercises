import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renderes Hello World", () => {
    //Arrange
    render(<Greeting />);
    const helloWorldText = screen.getByText("Hello World", { exact: false });
    expect(helloWorldText).toBeInTheDocument();
  }); 

  test('renders good to see you if the button is not clicked', ()=>{
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  }); 

  test('renders changed! if the button was clicked', ()=>{
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const outoutElement = screen.getByText("Change");
    expect(outoutElement).toBeInTheDocument();
  }); 

  test('Does not render - It is good to see you.', ()=>{
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const outoutElement = screen.queryByText('It is good to see you.', { exact: false });
    expect(outoutElement).not.toBeInTheDocument();
  }); 

});
