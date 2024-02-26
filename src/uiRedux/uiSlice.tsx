import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  ActiveSession: string;
}

const initialState: UiState = {
  ActiveSession: "",
};

const UiSlice = createSlice({
  name: "uiReduc",
  initialState,
  reducers: {
    setActiveSession: (state, action: PayloadAction<string>) => {
      state.ActiveSession = action.payload;
    },
  },
});

export const { setActiveSession } = UiSlice.actions;
export default UiSlice.reducer;
