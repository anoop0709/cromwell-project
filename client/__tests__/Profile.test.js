import "@testing-library/jest-dom";
import { Profile } from "../src/pages/Profile/Profile";
import { jest } from "@jest/globals";
import { Provider } from "react-redux";
import { store } from "../src/utils/store";
import { StaticRouter } from "react-router-dom/server";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Api from "../src/api/userApi";

const mockGet = jest.spyOn(Api, "get");

afterAll(() => {
    jest.clearAllMocks();
  });


  describe("Login Component", () => {
  
    it("renders without crashing", () => {
      render(
        <StaticRouter>
          <Provider store={store}>
            <Profile />
          </Provider>
        </StaticRouter>
      );
  
    });
});