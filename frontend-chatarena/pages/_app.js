import Modal from "@/components/common/top.components/modal";
import { ModalProvider } from "@/components/common/top.components/ModalContext";
import { store } from "@/store/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* This Modal Provider Context used for POPUP Box/Dialog Box Management with Modal */}
      <ModalProvider>
        <Component {...pageProps} />
        <Modal />
      </ModalProvider>
    </Provider>
  );
}
