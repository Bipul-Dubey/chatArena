import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
