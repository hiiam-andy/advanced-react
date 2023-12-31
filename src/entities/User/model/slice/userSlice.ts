import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
