import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import { Loader } from "./components/Loader/Loader";
import { Layout } from "./components/Layout/Layout";
import { ErrorPage } from "./pages/Error/ErrorPage";
import { LOCALES } from "./i18n/locales";
import { IntlProvider } from "react-intl";
import { messages } from "./i18n/messages";

const Home = lazy(() => import("./pages/Home/Home"));
const Examples = lazy(() => import("./pages/Examples/Examples"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const Login = lazy(() => import("./pages/Authentication/Login"));
const Registr = lazy(() => import("./pages/Authentication/Registr"));
const ForgotPasswordPage = lazy(() =>
  import("./pages/ForgotPasswordPage/ForgotPasswordPage")
);
const ResetPasswordPage = lazy(() =>
  import("./pages/ResetPasswordPage/ResetPasswordPage")
);
const WaitListPage = lazy(() => import("./pages/WaitListPage/WaitListPage"));

function App() {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  function getInitialLocal() {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }

  const handleChange = (locale, e) => {
    setCurrentLocale(locale);
    localStorage.setItem("locale", locale);

    setCurrentLocale(e.target.value);
    localStorage.setItem("locale", e.target.value);
  };

  const handleChangeSelect = (e, locale) => {
    setCurrentLocale(locale);
    localStorage.setItem("locale", locale);

    setCurrentLocale(e.target.value);
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
          <Route
            path="/"
            element={
              <Layout
                currentLocale={currentLocale}
                handleChange={handleChange}
                onSelect={handleChangeSelect}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="examples" element={<Examples />} />
            <Route path="pricing" element={<Pricing />} />
          </Route>
          <Route
            path="login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="forgot-password"
            element={
              <Suspense fallback={<Loader />}>
                <ForgotPasswordPage />
              </Suspense>
            }
          />
          <Route
            path="reset-password"
            element={
              <Suspense fallback={<Loader />}>
                <ResetPasswordPage />
              </Suspense>
            }
          />
          <Route
            path="registration"
            element={
              <Suspense fallback={<Loader />}>
                <Registr />
              </Suspense>
            }
          />
          <Route
            path="wait-list"
            element={
              <Suspense fallback={<Loader />}>
                <WaitListPage />
              </Suspense>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </IntlProvider>
    </>
  );
}

export default App;
