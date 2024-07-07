import "../styles/globals.css";
import PrivateRoute from "../lib/private-route";
import { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout<P = {}> = NextPage<P> & {
  authenticationRequired?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component?.getLayout ?? ((page) => page);
  const authenticationRequired = Component?.authenticationRequired ?? false;

  return (
    <>
      {authenticationRequired ? (
        <PrivateRoute>{getLayout(<Component {...pageProps} />)}</PrivateRoute>
      ) : (
        getLayout(<Component {...pageProps} />)
      )}
    </>
  );
}
