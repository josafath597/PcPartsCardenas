import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isSaving: true
    },
    reducers: {
        state: (state, action ) => {
            state.state = state;
        },
    }
});

// Action creators are generated for each case reducer function
export const { state } = cartSlice.actions;