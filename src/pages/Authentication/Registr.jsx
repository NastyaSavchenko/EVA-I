import { Registration } from "../../components/Registration/Registration";
import { Logo } from "../../components/Logo/Logo";
import { EmailVerification } from "../../components/EmailVerification/EmailVerification";

import { useState } from "react";

const Registr = () => {
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  return (
    <main>
      <div className="authContainer">
        <Logo />
        {registrationStatus !== 201 ? (
          <Registration
            setRegistrationStatus={setRegistrationStatus}
            setUserEmail={setUserEmail}
          />
        ) : (
          <EmailVerification userEmail={userEmail} />
        )}
      </div>
    </main>
  );
};

export default Registr;
