// this is the reducer

// the counter will have slice, "slice" comes from splitting up redux state objects into
// multiple slices of state

// "slice" is a collection of reducer logic and actions for single logic in the app

// Ex: A blog might have a "slice" of posts, and another "slice" for comments,
// you will handle the logic of each differently, so each get their own slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  //we will name it as counter
  name: "counter",
  //2nd argument or parameter we will pass in
  initialState,
  //reducers is where we will name all our different actions, look similar to usereducer hook
  reducers: {
    increment: (state) => {
      // state that we define above in our initialstate
      state.count += 1;
    },
    decrement: (state) => {
      // state that we define above in our initialstate
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    // it will receive state and action
    incrementByAmount: (state, action) => {
      // it will be the amount that we pass in and it
      //will be in the payload of this function
      state.count += action.payload;
    },
  },
});

//after we add actions which is in reducers in counterSlice
//we will need to export it
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// this is the full reducer that we export, we need to export this bcs the store will need this
//now we already export our reducer to the store
export default counterSlice.reducer;
