import { Logo } from "../../components/Logo/Logo";
import { SignIn } from "../../components/Sign_In/SignIn";

export const Login = () => {
  return (
    <main>
      <div className="authContainer">
      <Logo />
      <SignIn />
      </div>
    </main>
  );
};
