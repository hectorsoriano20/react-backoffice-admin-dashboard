import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            dispatch({type:"LOGIN", payload:user})
            navigate("/")
          })
          .catch((error) => {
            setError(true);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <div className="login">
        <img src="https://i.ibb.co/z2s28KW/Nueva-Gestion.jpg" alt="" className="itemImg"/>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="EMAIL" onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/>
            <button type="submit">LOGIN</button>
            {error && <span>Credenciales incorrectas!</span>}
        </form>
    </div>
  );
};

export default Login;
