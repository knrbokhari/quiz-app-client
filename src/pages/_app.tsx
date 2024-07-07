import "../styles/globals.css";
import PrivateRoute from "../lib/private-route";
import { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import QueryProvider from "../framework/rest/client/query-provider";

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
      <QueryProvider pageProps={pageProps}>
        {authenticationRequired ? (
          <PrivateRoute>{getLayout(<Component {...pageProps} />)}</PrivateRoute>
        ) : (
          getLayout(<Component {...pageProps} />)
        )}
        <ToastContainer autoClose={2000} theme="colored" />
      </QueryProvider>
    </>
  );
}
