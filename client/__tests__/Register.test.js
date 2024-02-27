import "@testing-library/jest-dom";
import { Register } from "../src/pages/Signin/Register";
import { jest } from "@jest/globals";
import { Provider } from "react-redux";
import { store } from "../src/utils/store";
import { StaticRouter } from "react-router-dom/server";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Api from "../src/api/userApi";

const mockPost = jest.spyOn(Api, "post");
afterAll(() => {
    jest.clearAllMocks();
  });


describe("Register Component", () => {
  
  it("renders without crashing", () => {
   render(
      <StaticRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </StaticRouter>
    );

    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last Name")).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    mockPost.mockImplementation(() => {
      return Promise.resolve({
        data: {
          message:
            "User Registration successful please sign in with your details",
        },
      });
    });
   render(
      <StaticRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </StaticRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password" },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirm password"), {
      target: { value: "password" },
    });

    fireEvent.click(screen.getByTestId("signup"));

    waitFor(() => {
      expect(
        screen.getByText(
          "User Registration successful please sign in with your details"
        )
      ).toBeInTheDocument();
    });
  });

  it("displays error message for invalid form submission", async () => {
    mockPost.mockImplementation(() => {
      return Promise.reject({
        response: {
          data: {
            message: "email already Registered",
          },
        },
      });
    });
   render(
      <StaticRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </StaticRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "invalidemail" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password" },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirm password"), {
      target: { value: "password" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /Register/i }));

    waitFor(() => {
      expect(screen.getByText("email already Registered")).toBeInTheDocument();
    });
  });
});
