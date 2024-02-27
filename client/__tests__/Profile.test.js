import "@testing-library/jest-dom";
import { Profile } from "../src/pages/Profile/Profile";
import { jest } from "@jest/globals";
import { Provider } from "react-redux";
import { store } from "../src/utils/store";
import { StaticRouter } from "react-router-dom/server";
import { useNavigate } from "react-router-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Api from "../src/api/userApi";


const mockGet = jest.spyOn(Api, "get");


afterAll(() => {
  jest.clearAllMocks();
});

describe("profile Component", () => {
  it("Render shimmer componenet without crashing", () => {
    render(
      <StaticRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </StaticRouter>
    );
    const shimmer = screen.getByTestId("shimmer");
    expect(shimmer).toBeInTheDocument();
    expect(shimmer.children.length).toBe(6);
  });

  it("Display user data inside the profile page", async () => {
    mockGet.mockImplementation(() => {
      return Promise.resolve({
        data: {
          userObj: {
            email: "test@test.com",
            firstName: "Jhon",
            lastName: "Doe",
            isSubscribed: true,
          },
        },
      });
    });
  store.dispatch({ type: 'USER', payload: {userObj: {
    email: "test@test.com",
    firstName: "Jhon",
    lastName: "Doe",
    isSubscribed: false,
  },}})

    render(
      <StaticRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </StaticRouter>
    );
    const fullName = screen.getByTestId("fullname");
    const email = screen.getByTestId("email");
    const subscribed = screen.getByTestId("subscribed-no");

   waitFor(() => {
      expect(fullName.innerHTML).toBe("Jhon Doe");
      expect(email.innerHTML).toBe("test@test.com");
      expect(subscribed.innerHTML).toBe("No");
    });
  });

  it("logout the user", async () => {
    mockGet.mockImplementation(() => {
      return Promise.resolve({
        data: {
          userObj: {
            email: "test@test.com",
            firstName: "Jhon",
            lastName: "Doe",
            isSubscribed: true,
          },
        },
      });
    });
    store.dispatch({ type: 'USER', payload: {userObj: {
        email: "test@test.com",
        firstName: "Jhon",
        lastName: "Doe",
        isSubscribed: false,
      },}})
    
    render(
      <StaticRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </StaticRouter>
    );

    fireEvent.click(screen.getByTestId("log-out"));
waitFor(() => {
    expect( store.dispatch()).toHaveBeenCalledTimes(2);
})
  });
});
