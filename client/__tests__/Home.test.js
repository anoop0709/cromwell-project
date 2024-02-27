import "@testing-library/jest-dom";
import { Home } from "../src/pages/Home/Home";
import { Provider } from "react-redux";
import { store } from "../src/utils/store";
import { StaticRouter } from "react-router-dom/server";
import React from "react";
import { render, screen} from "@testing-library/react";




describe("Home Component", () => {
  
  it("renders without crashing", () => {
    render(
      <StaticRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </StaticRouter>
    );
const homePage = screen.getByTestId("home-page");

expect(homePage).toBeInTheDocument();
    
  });
});