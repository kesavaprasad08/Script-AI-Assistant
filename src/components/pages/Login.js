import Header from "../Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/authContext";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:4000/auth/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      });
      if (response.data.message === "User Authorized") {
        authCtx.login(response.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Header />
      <form onSubmit={submitHandler} className="p-24">
        <p>Login</p>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
