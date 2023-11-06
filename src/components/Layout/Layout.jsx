import { Outlet } from "react-router";
import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import { Footer } from "../Footer/Footer";
import { Loader } from "../Loader/Loader";
import { BotBtn } from "../BotBtn/BotBtn";

export const Layout = ({currentLocale, handleChange}) => {
  return (
    <>
      <AppBar currentLocale={currentLocale} handleChange={handleChange} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <BotBtn />
    </>
  );
};
