import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/authContext";
import Header from "../Header";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:4000/auth/signup", {
        email: e.target.email.value,
        password: e.target.password.value,
      });
      console.log(response);
      if (response.data.success === true) {
        authCtx.login(response.data.token);
        navigate('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Header />
      <form onSubmit={submitHandler} className="p-24">
        <p>Sign Up</p>
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
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignUp;
