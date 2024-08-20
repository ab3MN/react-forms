import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
  characters: { name: string }[];
}

const initialState: IUserState = {
  characters: [],
};

const userSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    saveUser: (state, { payload }: PayloadAction<{ name: string }>) => {
      state.characters.push(payload);
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
