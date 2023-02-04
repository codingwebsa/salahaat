import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri&family=Nunito&display=swap"
          rel="stylesheet"
        />
        {/* google search console */}
        <meta
          name="google-site-verification"
          content="v3dJxYNbT1G_jw050ldr8twXnPoTOM4Zc6EhWxwoPW4"
        />
        {/* manifest */}
        <link rel="manifest" href="/manifest.json"></link>
        {/* icon */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className="bg-slate-100 text-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
