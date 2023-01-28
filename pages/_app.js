import { GlobalContextProvider } from "@/context/globalContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalContextProvider>
        <Component {...pageProps} />
        <Toaster />
      </GlobalContextProvider>
    </>
  );
}
