import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Examples } from "./pages/Examples/Examples";
import { Pricing } from "./pages/Pricing/Pricing";
import { Layout } from "./components/Layout/Layout";
import { Error } from "./pages/Error/Error";
import { Authentication } from "./pages/Authentication/Authentication";
import { Registration } from "./components/Registration/Registration";

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
        <Route path="auth" element={<Authentication />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
