import { LEFT_BAR } from "@/constants/appConstant";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    open: false,
    sidebarType: "overview",
  },
  leftBar: {
    type: LEFT_BAR.TYPE.CHAT,
    subType: "",
    privacySubType: "",
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
    UpdateLeftBarType(state, actions) {
      state.leftBar.type = actions.payload;
    },
    UpdateLeftBarSubType(state, actions) {
      state.leftBar.subType = actions.payload;
      if (actions.payload == LEFT_BAR.SETTING_SUB_TYPE.PRIVACY) {
        state.leftBar.privacySubType = "";
      }
    },
    UpdateLeftBarPrivacyType(state, actions) {
      state.leftBar.privacySubType = actions.payload;
    },
  },
});

export default appSlice.reducer;

export const {
  toggleSidebar,
  UpdateToggleSidebar,
  UpdateLeftBarType,
  UpdateLeftBarSubType,
  UpdateLeftBarPrivacyType,
} = appSlice.actions;
