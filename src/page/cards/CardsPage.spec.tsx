import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardsPage } from "./CardsPage";
import { CardState } from "../../state/Card/card.slice";
import { Provider } from "react-redux";
import { store } from "../../state/store";

describe("Card informatino page test", () => {
  
  it("Should display default card", () => {
    render(<Provider store={store}><CardsPage /></Provider>);
    const defaultCardExpDate = screen.getByText(/Expires:/i);
    const defaultCardCVC = screen.getByText(/CVC:/i);

    expect(defaultCardExpDate).toBeInTheDocument();
    expect(defaultCardCVC).toBeInTheDocument();
  });
});