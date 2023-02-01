import { GlobalContextProvider } from "@/context/globalContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#00C9A7"
        startPosition={0.4}
        stopDelayMs={0}
        height={3}
        showOnShallow={true}
        options={{
          showSpinner: false,
        }}
      />
      <GlobalContextProvider>
        <Component {...pageProps} />
        <Toaster />
      </GlobalContextProvider>
    </>
  );
}
