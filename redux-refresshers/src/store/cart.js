import { createSlice } from "@reduxjs/toolkit";

// const initialCartState = {
//   item: 0,
//   totalItems: 0,
//   isOpenCart: false,
// };

// const CartSlice = createSlice({
//   name: "cart",
//   initialState: initialCartState,
//   reducers: {
//     itemIncrement(state) {
//       state.item++;
//       state.totalItems++;
//     },
//     itemDecrement(state) {
//       state.item--;
//       state.totalItems--;
//     },
//     addCart(state) {
//       state.item++;
//       state.totalItems++;
//     },
//     openCart(state) {
//       state.isOpenCart = !state.isOpenCart;
//     },
//   },
// });

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      //find()はテスト関数を満たす配列ないの最初の要素の値を返す
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        //普通のreduxではpushメソッドは使えない
        //なぜならばpushメソッドは配列自体に変更を加えてしまうためであり、reduxはstateのコピーを変更する必要があるから
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
