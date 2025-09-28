import { createSlice } from '@reduxjs/toolkit';
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:4
    },
    reducers:{
        addCart:(state)=>{
            state.items+=1;
        },
        removeCart:(state)=>{
            state.items-=1;
        },
        clearCart:(start)=>{
            state.items=0;
        }
    }
})
export const {addCart,removeCart,clearCart}=cartSlice.actions;

export default cartSlice.reducer;