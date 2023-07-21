import { Outlet } from "react-router";
import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import { Footer } from "../Footer/Footer";
import { Loader } from "../Loader/Loader";
import { ScrollButton } from "../ScrollButton/ScrollButton";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ScrollButton />
      <Footer />
    </>
  );
};
