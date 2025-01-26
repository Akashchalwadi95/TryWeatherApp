import { useState } from "react";
import {useNavigate} from "react-router-dom";

function SignUp({setIsSignedUp}){

  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e)=>{
    e.preventDefault();

    console.log("User:",user, "Password:",password);
    setIsSignedUp(true);
    navigate("/Weather");
  };

  return(
    <div>
      <form>
      <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} placeholder="Enter Username"></input>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"></input>
      <button onClick={handleSignUp}>Sign Up</button>
      </form>

    </div>
  );
}

export default SignUp;