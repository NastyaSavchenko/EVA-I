import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

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
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
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
    </>
  );
}

export default App;
