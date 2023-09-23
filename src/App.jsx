import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Examples } from "./pages/Examples/Examples";
import { Pricing } from "./pages/Pricing/Pricing";
import { Layout } from "./components/Layout/Layout";
import { ErrorPage } from "./pages/Error/ErrorPage";
import { ForgotPassword } from "./components/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./components/ResetPassword/ResetPassword";
import { WaitList } from "./components/WaitList/WaitList";

import { Login } from "./pages/Authentication/Login";
import { Registr } from "./pages/Authentication/Registr";

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
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="registration" element={<Registr />} />
        <Route path="wait-list" element={<WaitList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
