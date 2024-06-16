import { UpdateToggleSidebar, toggleSidebar } from "../slices/app";
import { store } from "../store";

export const handleToggleSidebar = () => {
  return store.dispatch(toggleSidebar());
};

export const handleUpdateToggleSidebar = (type = "overview") => {
  return store.dispatch(UpdateToggleSidebar(type));
};
