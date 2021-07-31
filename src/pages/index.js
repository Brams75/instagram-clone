import React from "react";
import Head from "next/head";
import HomeLayout from "../components/HomeLayout";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <HomeLayout text="Inscrivez-vous" href="/signup">
      <Head>
        <title>Instagram</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LoginForm />
    </HomeLayout>
  );
}
