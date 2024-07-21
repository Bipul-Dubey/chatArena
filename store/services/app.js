import {
  UpdateLeftBarPrivacyType,
  UpdateLeftBarSubType,
  UpdateLeftBarType,
  UpdateToggleSidebar,
  toggleSidebar,
} from "../slices/app";
import { store } from "../store";

export const handleToggleSidebar = () => {
  return store.dispatch(toggleSidebar());
};

export const handleUpdateToggleSidebar = (type = "") => {
  return store.dispatch(UpdateToggleSidebar(type));
};

export const handleUpdateToggleLeftBar = (type = "") => {
  return store.dispatch(UpdateLeftBarType(type));
};

export const handleUpdateLeftBarSubType = (subtype = "") => {
  return store.dispatch(UpdateLeftBarSubType(subtype));
};

export const handleUpdateLeftBarPrivacy = (privacy = "") => {
  return store.dispatch(UpdateLeftBarPrivacyType(privacy));
};
