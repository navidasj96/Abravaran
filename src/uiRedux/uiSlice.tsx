import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  ActiveSession: string;
  HamburgerMenuOpen: boolean;
  ProfileModalIsOpen: boolean;
}

const initialState: UiState = {
  ActiveSession: "Home",
  HamburgerMenuOpen: false,
  ProfileModalIsOpen: false,
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
    HamburgerMenuClose: (state) => {
      state.HamburgerMenuOpen = false;
    },
    HamburgerMenuOpen: (state) => {
      state.HamburgerMenuOpen = true;
    },
    setProfileModalOpen: (state) => {
      state.ProfileModalIsOpen = true;
    },
    setProfileModalClose: (state) => {
      state.ProfileModalIsOpen = false;
    },
  },
});

export const {
  setActiveSession,
  setHamburgerMenu,
  setProfileModalOpen,
  setProfileModalClose,
} = UiSlice.actions;
export default UiSlice.reducer;
