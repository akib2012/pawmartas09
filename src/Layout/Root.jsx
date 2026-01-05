import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import Loading from "../Components/Loading";

const Root = () => {
  const { state } = useNavigation();
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Navbar></Navbar>
      </header>

      <main className="flex-1">
       {state === 'loading' ? <Loading /> : <Outlet></Outlet>} 
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
