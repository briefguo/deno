import React, { ComponentType } from "react";

export default function App({
  Page,
  pageProps,
}: {
  Page: ComponentType<any>;
  pageProps: any;
}) {
  return (
    <main>
      <head>
        <link rel="stylesheet" href="./style/global.css" />
      </head>
      <Page {...pageProps} />
    </main>
  );
}
