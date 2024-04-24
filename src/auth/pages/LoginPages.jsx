import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";


export const LoginPages = () => {

  const navigate = useNavigate();
  const {login} = useContext(AuthContext);
  const nameUser = 'Jose Luis'; 

  const onLoginUser = () => {

    const lastPath = localStorage.getItem('lastpath') || '/';
    login(nameUser);

    navigate(lastPath,{
      replace: true
    })

  }

  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <button onClick={onLoginUser} className="btn btn-primary">Login</button>
      </div>
    </>
  )
}