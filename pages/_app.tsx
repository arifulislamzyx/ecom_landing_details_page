import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import "./globals.css";
import type { AppProps } from "next/app";
import CopyrightBar from "@/layout/CopyrightBar";
import { Provider } from "react-redux";
import store from "@/redux/store/Store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <CopyrightBar />
      </Provider>
    </>
  );
}
