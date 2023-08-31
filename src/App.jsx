import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Examples } from "./pages/Examples/Examples";
import { Pricing } from "./pages/Pricing/Pricing";
import { Layout } from "./components/Layout/Layout";
import { Error } from "./pages/Error/Error";
import { FinishRegistration } from "./components/FinishRegistration/FinishRegistration";
import { ForgotPassword } from "./components/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./components/ResetPassword/ResetPassword";

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
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="registration" element={<Registr />} />
        <Route path="finish-registration" element={<FinishRegistration />} />
      </Routes>
    </>
  );
}

export default App;