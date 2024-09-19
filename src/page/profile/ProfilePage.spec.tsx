import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProfilePage } from "./ProfilePage";
import { CardState } from "../../state/Card/card.slice";
import { Provider } from "react-redux";
import { store } from "../../state/store";

describe("Profile information page test", () => {
  
  it("Should display profile information", () => {
    render(<Provider store={store}><ProfilePage /></Provider>);
    const defaultFirstNameLabel = screen.getByText("First Name:");
    const defaultLastNameLabel = screen.getByText("Last Name:");
    const defaultEmailLabel = screen.getByText("Email:");

    expect(defaultFirstNameLabel).toBeInTheDocument();
    expect(defaultLastNameLabel).toBeInTheDocument();
    expect(defaultEmailLabel).toBeInTheDocument();
  });
});