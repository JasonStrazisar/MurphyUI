import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "../";

describe("Avatar", () => {
  it("1. Should not crash when rendering", () => {
    expect(() => {
      render(<Avatar />);
    }).not.toThrowError();
  });

  it("2. Should render one char when name is one word and no image is provided", () => {
    render(<Avatar name="Harvey" />);
    expect(screen.getByText("H")).toBeInTheDocument();
  });

  it("3. Should render two chars when name is more than one word and no image is provided", () => {
    render(<Avatar name="Harvey Specter" />);
    expect(screen.getByText("HS")).toBeInTheDocument();
  });

  it("4. Should render an image when src is provided", () => {
    render(
      <Avatar
        src="http://mylenebeaudoin.com/wp-content/uploads/2019/07/suits_cast_harvey_s8.jpg"
        name="Harvey Specter"
      />
    );
    expect(screen.getByRole("img").getAttribute("src")).toEqual(
      "http://mylenebeaudoin.com/wp-content/uploads/2019/07/suits_cast_harvey_s8.jpg"
    );
  });

  it("5. Should render the initials name when forceShowInitials is true", () => {
    render(
      <Avatar
        name="Harvey Specter"
        src="http://mylenebeaudoin.com/wp-content/uploads/2019/07/suits_cast_harvey_s8.jpg"
        forceShowInitials
      />
    );
    expect(screen.getByText("HS")).toBeInTheDocument();
  });

  it("6. Should render the good background color when backgroundColor is provided", () => {
    render(<Avatar name="Harvey Specter" backgroundColor="teal-800" />);
    expect(screen.getByText("HS")).toHaveStyle("background-color: teal-800");
  });
});
