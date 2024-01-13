import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './usersSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    userList: usersSlice.reducer,
  },
});
