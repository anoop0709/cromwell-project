import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Header } from "../src/components/Header/Header";
import { Provider } from "react-redux";
import { store } from "../src/utils/store";
import { StaticRouter } from "react-router-dom/server";
import React from 'react';


describe('Header test suite', () => {


it("logo should load on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );
    const logo =  header.getAllByTestId("logo-img");
    expect(logo[0].src).toBe("http://localhost/[object%20Object]")

});

it("login text should display on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );
    const loginText =  header.getAllByTestId("login-text");
    expect(loginText[0].innerHTML).toBe("Login/Register")

});

})