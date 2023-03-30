import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

//if action is supposed to be handled by one action, use reducers but
//if action is supposed to handled by multiple reducers, use extraReducers.

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },

    removeUser(state, action) {
      // console.log("sssa", action.payload);
      state.splice(action.payload, 1);
    },
    // clearAllUsers(state, action) {
    //   console.log("hi delete");
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});

// console.log("ssss", userSlice.actions);

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
