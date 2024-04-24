import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
    title: string;
    description: string;
}

interface UserState {
    data: UserData[];
}

const initialState: UserState = {
    data: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserData>) => {
            state.data.push(action.payload);
        },
        updateUser: (state, action: PayloadAction<{ index: number, title: string, description: string }>) => {
            state.data = state.data.map((item, index) => {
                if (index === action.payload.index) {
                    return {
                        ...item,
                        title: action.payload.title,
                        description: action.payload.description,
                    };
                }
                return item;
            });
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter((_, index) => index !== action.payload);
        }
    }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
