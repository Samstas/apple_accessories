import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.userName = payload.name;
      state.email = payload.email;
      state.token = payload.token;
      state.id = payload.id;
    },
    removeUser(state, { payload }) {
      state.userName = null;
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;

export const getUser = (state) => state.user.user;
