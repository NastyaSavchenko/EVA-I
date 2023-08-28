import { Registration } from "../../components/Registration/Registration";
import { Logo } from "../../components/Logo/Logo";
import { EmailVerification } from "../../components/EmailVerification/EmailVerification";

import { useState } from "react";

export const Registr = () => {
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  return (
    <main>
      <div className="authContainer">
        <Logo />
        {!isRegistrationSuccess ? (
          <Registration
            setIsRegistrationSuccess={setIsRegistrationSuccess}
            setUserEmail={setUserEmail}
          />
        ) : (
          <EmailVerification userEmail={userEmail} />
        )}
      </div>
    </main>
  );
};
