import React, { useState,useEffect } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword , onAuthStateChanged  } from "firebase/auth";

import { db, Auth } from "../../components/Firebase";

const Login = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    Auth.onAuthStateChanged((user)=>{
      if(user){
        navigate('/todo')
      }
    })

  },[])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const hanlemail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    signInWithEmailAndPassword(Auth, email, password)
      .then((data) => {
        navigate('/todo');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  
  return (
    <div className="login-container">
      <div className="heading">
        <h3>Log-in</h3>
      </div>
      <div className="input-container">
        <input
          name="email"
          placeholder="Email"
          type="text"
          className="input"
          onChange={hanlemail}
          value={email}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          className="input"
          onChange={handlePassword}
          value={password}
        />
        <div>
          <p onClick={() => navigate("/signup")}>Create new account</p>
        </div>
      </div>
      <button className="btn" onClick={handleLogin}>
        sign in
      </button>
    </div>
  );
};

export default Login;
