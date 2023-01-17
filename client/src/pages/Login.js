import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";

const Login = () => {
  const token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return <LoginForm />;
};

export default Login;
