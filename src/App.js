import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Editor from "./components/pages/Editor";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import AuthContext from "./store/authContext";
import Dashboard from "./components/pages/Dashboard";
import Modal from "./components/ui/Modal";

function App() {
  const auth = useContext(AuthContext);
  const isLoggedIn = auth.isLoggedIn;
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Modal />} />
          <Route path="/signup" element={<SignUp />} />
          {isLoggedIn && <Route path="/editor" element={<Editor />} />}
          <Route path="/login" element={<Login />} />
          {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
