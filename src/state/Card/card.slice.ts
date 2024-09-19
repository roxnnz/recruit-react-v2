import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CardState {
    cardNumber?: number;
    cvc?: number;
    expDate?: string;
};

const initialCardState: CardState[] = [];

const cardSlice = createSlice ({
    name: 'card',
    initialState: initialCardState,
    reducers: {
        insertCardDetail: (state, action: PayloadAction<CardState>) => {
            state.push(action.payload)
        }
    }
});

export const { insertCardDetail } = cardSlice.actions;

export default cardSlice.reducer;