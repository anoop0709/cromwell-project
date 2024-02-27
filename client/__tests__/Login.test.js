import "@testing-library/jest-dom";
import { Login } from "../src/pages/Login/Login";
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


describe("Login Component", () => {
  
  it("renders without crashing", () => {
    render(
      <StaticRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </StaticRouter>
    );

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    mockPost.mockImplementation(() => {
      return Promise.resolve({
        data: {
          message:
            "success ok",
        },
      });
    });
    render(
      <StaticRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </StaticRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password" },
    });
 
    fireEvent.click(screen.getByTestId("login"));

    waitFor(() => {
      expect(
        screen.getByText(
          "success ok"
        )
      ).toBeInTheDocument();
    });
  });

  it("displays error message for invalid form submission", async () => {
    mockPost.mockImplementation(() => {
      return Promise.reject({
        response: {
          data: {
            message: "user not found",
          },
        },
      });
    });
    render(
      <StaticRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </StaticRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "invalidemail" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /Log in/i }));

    waitFor(() => {
      expect(screen.getByText("user not found")).toBeInTheDocument();
    });
  });
});
