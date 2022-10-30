import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



const initialState = {
  items: [],
}

export const counterSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<never>) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action: PayloadAction<never>) => {
      const index = state.items.findIndex((basketItem) => basketItem.id === action.payload.id);
      let newbasket = [...state.items];
      if(index >= 0){
        // the item exists in the basket... remove it...
        newbasket.splice(index,1);
      }else{
        console.warn(
          `Cant remove product (id: ${action.payload.id})`
        )
      }

      state.items = newbasket;
   },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = counterSlice.actions
export const selectItems = (state: { basket: { items: any } }) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total: any, item: { price: any }) => total + item.price, 0);
export default counterSlice.reducer