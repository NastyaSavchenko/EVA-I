// import { Outlet } from "react-router";
// import { Suspense, useEffect, useState } from "react";
// import { AppBar } from "../AppBar/AppBar";
// import { Footer } from "../Footer/Footer";
// import { Loader } from "../Loader/Loader";
// import { BotBtn } from "../BotBtn/BotBtn";
// import { ModalWindow } from "../ModalWindow/ModalWindow";

// export const Layout = ({ currentLocale, handleChange, onSelect }) => {
//   const [showModal, setShowModal] = useState(true);
//   const [isOpacity, setIsOpacity] = useState(false);

//   // const [cookieExists, setCookieExists] = useState(false);

//   // const setCookie = (name, value, days) => {
//   //   const date = new Date();
//   //   date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//   //   const expires = `expires=${date.toGMTString()}`;
//   //   document.cookie = `${name}=${value}; ${expires}; path=/`;
//   // };

//   // // Function to get the value of a cookie by name
//   // const getCookie = (name) => {
//   //   const nameEQ = `${name}=`;
//   //   const ca = document.cookie.split(';');
//   //   for (let i = 0; i < ca.length; i++) {
//   //     let c = ca[i];
//   //     while (c.charAt(0) === ' ') c = c.substring(1, c.length);
//   //     if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
//   //   }
//   //   return null;
//   // };

//   // // Effect to run when the component mounts
//   // useEffect(() => {
//   //   // Validate cookie
//   //   const myCookie = getCookie('MyCookie');
  
//   //   if (myCookie === null) {
//   //     // Cookie does not exist
//   //     setCookieExists(false);
//   //     setCookie('MyCookie', 'foo', 7);
//   //   } else {
//   //     // Cookie exists
//   //     setCookieExists(true);
//   //   }
//   // }, []);

//   const key = "modalDisplayed";

//   useEffect(() => {
//     const isModalDisplayed = localStorage.getItem(key);

//     if (!isModalDisplayed) {
//       // If the modal has not been displayed before, show it
//       setShowModal(true);

//       // Set a flag in local storage to indicate that the modal has been displayed
//       localStorage.setItem(key, "true");
//     }

//     const timeoutId = setTimeout(() => {
//       setShowModal(false);
//     }, 3000);

//     const timeOutOpacity = setTimeout(() => {
//       setIsOpacity(true);
//     }, 3000);

//     return () => {
//       clearTimeout(timeOutOpacity);
//       clearTimeout(timeoutId);
//     };
//   }, [setShowModal]);
//     if(localStorage.getItem(key)) {
//     console.log('You were already here');
//   } else {
//     console.log('new');
//     localStorage.setItem(key, "true");
//   }

//   return (
//     <>
//      {/* {cookieExists && <ModalWindow showModal={showModal} isOpacity={isOpacity} />} */}
//       <ModalWindow showModal={showModal} isOpacity={isOpacity} />
//       <AppBar currentLocale={currentLocale} handleChange={handleChange} onSelect={onSelect} />
//       <Suspense fallback={<Loader />}>
//         <Outlet />
//       </Suspense>
//       <Footer />
//       <BotBtn />
//     </>
//   );
// };

import { Outlet } from "react-router";
import { Suspense, useEffect, useState } from "react";
import { AppBar } from "../AppBar/AppBar";
import { Footer } from "../Footer/Footer";
import { Loader } from "../Loader/Loader";
import { BotBtn } from "../BotBtn/BotBtn";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Layout = ({ currentLocale, handleChange, onSelect }) => {
  const [showModal, setShowModal] = useState(true);
  const [isOpacity, setIsOpacity] = useState(false);
  const [render, setRender] = useLocalStorage('render', false);



  useEffect(() => {
    if (!render) {
      // If it's the first render, show the modal and set the flag in local storage
      setShowModal(true);
      setRender(true);

    } else {
      // If it's not the first render, set a timeout to hide the modal after 3000 milliseconds
      const timeoutId = setTimeout(() => {
        setShowModal(false);
      }, 3000);
      const timeOutOpacity = setTimeout(() => {
        setIsOpacity(true);
      }, 3000);
      // Cleanup function to clear the timeouts and update the local storage flag
      return () => {
        clearTimeout(timeOutOpacity);
        clearTimeout(timeoutId);
        // setRender(false);
      };
    }
  }, [render, setRender]); // Depend on render and setRender to re-run the effect when they change

  return (
    <>
      {/* {showModal && <ModalWindow showModal={showModal} isOpacity={isOpacity} />} */}
      <ModalWindow showModal={showModal} isOpacity={isOpacity} />
      <AppBar currentLocale={currentLocale} handleChange={handleChange} onSelect={onSelect} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <BotBtn />
    </>
  );
};
