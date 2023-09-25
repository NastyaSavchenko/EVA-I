import { Logo } from "../../components/Logo/Logo";
import { SignIn } from "../../components/Sign_In/SignIn";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isLoggedIn, isVerify } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn && isVerify) {
      navigate("/wait-list");
    }
  }, [isLoggedIn, isVerify]);
  return (
    <main>
      <div className="authContainer">
        <Logo />
        <SignIn />
      </div>
    </main>
  );
};

export default Login;
