import React, { useState } from "react";
import "./Signup.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../components/Firebase";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate()
  const [registerinfp, setRegisterInfo] = useState({
    email: "",
    password: "",
    confirmPassword: " ",
  });

  const handleCreateUser = () =>{
    const email = registerinfp.email
    const password = registerinfp.password

    createUserWithEmailAndPassword(Auth, email,password).then(()=>{
      navigate('/todo')

    }).catch((err)=>{
      alert(err.message)

    })
  }
  return (
    <div className="Signup-container">
      <div className="heading">
        <h3>Sign-Up</h3>
      </div>
      <div className="input-container">
        <input
          name="email"
          placeholder="Email"
          type="text"
          className="input"
          value={registerinfp.email}
          onChange={(e)=>setRegisterInfo({...registerinfp,email:e.target.value} )}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          className="input"
          value={registerinfp.password}
          onChange={(e)=>setRegisterInfo({...registerinfp,password:e.target.value} )}
        />
        <input
          name="confirm password"
          placeholder="confirm password"
          className="input"
          type="password"
          value={registerinfp.confirmPassword}
          onChange={(e)=>setRegisterInfo({...registerinfp,confirmPassword:e.target.value} )}
        />
        <div>
          <p onClick={()=>navigate('/')}>alredy have an account</p>
        </div>
      </div>
      <button className="btn" onClick={handleCreateUser}>sign in</button>
    </div>
  );
};

export default Signup;
