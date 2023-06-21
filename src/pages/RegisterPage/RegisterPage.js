import { AuthNavigate } from "components/Auth/AuthNavigate/AuthNavigate";

function RegisterPage() {
  return (
    <AuthNavigate linkPath={"/login"} linktext={"Log In"}>
      Register
    </AuthNavigate>
  );
}

export default RegisterPage;
