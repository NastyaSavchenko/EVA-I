import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

// import { Home } from "./pages/Home/Home";
// import { Examples } from "./pages/Examples/Examples";
// import { Pricing } from "./pages/Pricing/Pricing";
import { Layout } from "./components/Layout/Layout";
import { ErrorPage } from "./pages/Error/ErrorPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import WaitListPage from "./pages/WaitListPage/WaitListPage";
import Login from "./pages/Authentication/Login";
import Registr from "./pages/Authentication/Registr";
import { LOCALES } from "./i18n/locales";
import { IntlProvider } from "react-intl";
import { messages } from "./i18n/messages";

// const Login = lazy(() => import("./pages/Authentication/Login"));
// const Registr = lazy(() => import("./pages/Authentication/Registr"));
// const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage/ForgotPasswordPage"));
// const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage/ResetPasswordPage"));
// const WaitListPage = lazy(() => import("./pages/WaitListPage/WaitListPage"));

const Home = lazy(() => import("./pages/Home/Home"));
const Examples = lazy(() => import("./pages/Examples/Examples"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
// const Login = lazy(() => import("./pages/Authentication/Login"));
// const Registr = lazy(() => import("./pages/Authentication/Registr"));
// const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage/ForgotPasswordPage"));
// const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage/ResetPasswordPage"));
// const WaitListPage = lazy(() => import("./pages/WaitListPage/WaitListPage"));

function App() {
  //localstorage
function getInitialLocal() {
  const savedLocale = localStorage.getItem("locale");
  return savedLocale || LOCALES.ENGLISH;
};

  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  const handleChange = (locale, e) => {
    setCurrentLocale(locale);
    localStorage.setItem('locale', locale);

    setCurrentLocale(e.target.value);
    // storing locale in the localstorage
    localStorage.setItem("locale", e.target.value);
  };

  const handleChangeSelect = (e, locale) => {

    setCurrentLocale(locale);
    localStorage.setItem('locale', locale);

    setCurrentLocale(e.target.value);
    // storing locale in the localstorage
    localStorage.setItem("locale", e.target.value);
  };

  return (
    <>
      <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.ENGLISH}
      >
        <Routes>
          <Route path="/" element={<Layout currentLocale={currentLocale} handleChange={handleChange} onSelect={handleChangeSelect} />}>
            <Route index element={<Home />} />
            <Route path="examples" element={<Examples />} />
            <Route path="pricing" element={<Pricing />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="registration" element={<Registr />} />
          <Route path="wait-list" element={<WaitListPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </IntlProvider>
    </>
  );
}

export default App;
