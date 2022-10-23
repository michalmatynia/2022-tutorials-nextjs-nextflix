import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { magic } from "../lib/magic-client";
import { useRouter } from "next/router";
interface UseMagicProps {
  magic: {
    user: { isLoggedIn: object };
  };
}
interface MyComponentProps extends UseMagicProps {}

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // useEffect(() => {
  //   async function checkLogin() {
  //     return await magic.user.isLoggedIn();
  //   }

  //   try {
  //     checkLogin().then((isLoggedIn) => {
  //       // const isLoggedIn = await magic.user.isLoggedIn();
  //       // if (isLoggedIn) {
  //       //   // route to /
  //       // } else {
  //       //   // route to /login
  //       // }
  //     });
  //   } catch (error) {
  //     console.log("error retrieving", error);
  //   }
  // }, []);
  // if logged
  // else
  return <Component {...pageProps} />;
}

export default MyApp;
