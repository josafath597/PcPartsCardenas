import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
        count: 0,
        id: null

    },
    reducers: {
        addNewCartItem: (state, action ) => {
            const found = state.items.find(item => item.id === action.payload.id);
            
            if (found) {
                state.items = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity;
                    }
                    return item;
                } );
            } else {
                state.items.push(action.payload);
            }
        },
        removeCartItem: (state, action ) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        removeAllCartItems: ( state ) => {
            state.items = [];
        },
        updateCartItems: (state, action ) => {
            state.items = action.payload;
        },
        totalCartItems: ( state ) => {
            state.total = state.items.reduce((acc, item) => {
                return acc + item.quantity * item.cost;
            }, 0);                          
        },
        countCartItems: ( state ) => {
            state.count = state.items.reduce((acc, item) => {
                return acc + item.quantity;
            }, 0)
        },
        getBuyId: (state, action ) => {
            state.id = action.payload;
        },
        clearBuy: (state) => {
            state.items= [];
            state.total = 0;
            state.count = 0;
            state.id = null;
        },
    }
});

// Action creators are generated for each case reducer function
export const { addNewCartItem,
    removeCartItem,
    removeAllCartItems,
    updateCartItems,
    buyCartItems,
    totalCartItems, 
    countCartItems,
    getBuyId,
    clearBuy,
} = cartSlice.actions;