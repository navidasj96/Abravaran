import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  ActiveSession: string;
  HamburgerMenuOpen: boolean;
}

const initialState: UiState = {
  ActiveSession: "",
  HamburgerMenuOpen: false,
};

const UiSlice = createSlice({
  name: "uiReduc",
  initialState,
  reducers: {
    setActiveSession: (state, action: PayloadAction<string>) => {
      state.ActiveSession = action.payload;
    },
    setHamburgerMenu: (state) => {
      state.HamburgerMenuOpen = !state.HamburgerMenuOpen;
    },
  },
});

export const { setActiveSession, setHamburgerMenu } = UiSlice.actions;
export default UiSlice.reducer;
