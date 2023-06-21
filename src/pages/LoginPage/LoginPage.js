import { AuthNavigate } from "components/Auth/AuthNavigate/AuthNavigate";

function LoginPage() {
  return (
    <AuthNavigate linkPath={"/register"} linktext={"Sign up"}>
      Login
    </AuthNavigate>
  );
}

export default LoginPage;
