import React, { useState } from "react";
import CustomLogin from "./CustomLogin";

function FirstLogin() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();



  const {Handle,message} = CustomLogin(email,pass);

  

  return (
    
    <div className="form">
                <h3>Second Login </h3>


    <div className="input-container">
      <label>Username or phone </label>
      <input type="text" name="email" onChange={e => setEmail(e.target.value)} required />
    </div>

    <div className="input-container">
      <label>Password </label>
      <input type="password" name="pass" onChange={e => setPass(e.target.value)} required />
    </div>
    <div className="button-container">

    <button style={{backgroundColor:'red'}} onClick={Handle}>Sign in</button>

    </div>
    <div>{message}</div>

</div>
  );
}

export default FirstLogin;