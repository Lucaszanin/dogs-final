import React from "react";
import Feed from "../Components/Feed/Feed";
import Head from "./Helper/Head";
import Loading from "./Helper/Loading";

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Home" description="Home do InstaDogs com feed" />
      <Feed />
    </section>
  );
};
