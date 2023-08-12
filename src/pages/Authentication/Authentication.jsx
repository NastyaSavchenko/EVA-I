import { Logo } from "../../components/Logo/Logo";
import { SignIn } from "../../components/Sign_In/SignIn";
import { Registration } from "../../components/Registration/Registration";

import { useState } from "react";

export const Authentication = () => {
  const [] =useState(false)
  return (
    <main>
      <Logo />
      <SignIn />
    </main>
  );
};
