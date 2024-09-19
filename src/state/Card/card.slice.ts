import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cardNumber } from "../../page/cards/Cards.module.scss";

export interface CardState {
  cardNumber?: number;
  cvc?: number;
  expDate?: string;
}

const initialCardState: CardState[] = [
  {
    cardNumber: 1111111111111111,
    cvc: 111,
    expDate: "2024-10",
  },
];

const cardSlice = createSlice({
  name: "card",
  initialState: initialCardState,
  reducers: {
    insertCardDetail: (state, action: PayloadAction<CardState>) => {
      state.push(action.payload);
    },
    removeCardByCardNumber: (
      state,
      action: PayloadAction<CardState["cardNumber"]>,
    ) => {
      const newState = state.filter(
        (card) => card.cardNumber !== action.payload,
      );
      return newState;
    },
  },
});

export const { insertCardDetail, removeCardByCardNumber } = cardSlice.actions;

export default cardSlice.reducer;
