import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RegisterCardPage } from "./RegisterCardPage";
import { CardState } from "../../state/Card/card.slice";
import { Provider } from "react-redux";
import { store } from "../../state/store";

describe("Card Register page test", () => {
  
  it("Should display card register form", () => {
    render(<Provider store={store}><RegisterCardPage /></Provider>);
    const inputLableCardNumber = screen.getByLabelText("Card Number");
    const inputLableCardCVC = screen.getByLabelText("CVC");
    const inputLableCardExpDate = screen.getByLabelText("Exp Date");

    expect(inputLableCardNumber).toBeInTheDocument();
    expect(inputLableCardCVC).toBeInTheDocument();
    expect(inputLableCardExpDate).toBeInTheDocument();
  });
});