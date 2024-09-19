import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    firstName: string;
    lastName: string;
    email: string;
};

const initialUserState: UserState = {
    firstName: 'Leo',
    lastName: 'LI',
    email: 'xin.leo.li@gmail.com',
};

const userSlice = createSlice ({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        updateCardDetail: (state, action) => {}
    }
});

export const { updateCardDetail } = userSlice.actions;

export default userSlice.reducer;