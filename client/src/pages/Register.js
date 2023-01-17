import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../features/authentication/RegisterForm";

const Register = () => {
  const token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return <RegisterForm />;
};

export default Register;
