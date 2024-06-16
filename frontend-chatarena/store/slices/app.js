import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    open: false,
    sidebarType: "overview",
  },
  // for APIs
  isLoading: false,
  data: null,
  error: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state, _) {
      state.sidebar.open = !state.sidebar.open;
    },
    UpdateToggleSidebar(state, actions) {
      state.sidebar.sidebarType = actions.payload;
    },
  },
});

export default appSlice.reducer;

export const { toggleSidebar, UpdateToggleSidebar } = appSlice.actions;
