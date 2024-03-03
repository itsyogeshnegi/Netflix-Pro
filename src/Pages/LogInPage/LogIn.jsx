import React, { useState } from "react";
import "./LogIn.css";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { get, getDatabase, ref, child, Database } from "firebase/database";
import { app } from "../../FireBase";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleSubmit = e => {
    e.preventDefault();

    if (email === "") {
      toast.warning("Fill your Email");
    } else if (password === "") {
      toast.warning("Fill your Password");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(value => navigate("/Home-Page") , toast.success("Welcome DUDE..."))
        .catch(err => toast.error("Invaild Id or Password"));
    }
  };
  return (
    <div className="Login">
      <form>
        <h1 style={{ fontWeight: "700", fontSize: "30px", color: "red" }}>
          Netflix Clone
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
        <p>
          New to Netflix?{" "}
          <Link to="/Sign-Up" style={{ color: "white" }}>
            {" "}
            Sign up now
          </Link>
        </p>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default LogIn;
