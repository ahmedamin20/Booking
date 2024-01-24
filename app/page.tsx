"use client";
import Header from "./_compnent/Header/Header";
import Auth from "./middlewares/useAuth";

const Home = () => {


  return (
    <>
      <Header />

    </>
  );
}

export default Auth(Home)


