import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserWithConvertImage } from '../../../types/User';

export interface IUserState {
  users: IUserWithConvertImage[];
}

const initialState: IUserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    saveUser: (state, { payload }: PayloadAction<IUserWithConvertImage>) => {
      state.users.push(payload);
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
