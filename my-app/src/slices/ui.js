import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setMode: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setMode } = uiSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMode = (state) => state.ui.mode;

export default uiSlice.reducer;
