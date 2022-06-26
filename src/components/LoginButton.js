import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 
import { useCookies } from "react-cookie";
import { Button } from 'sajad-react-component-library/src/Button.jsx';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const [cookies, setCookie] = useCookies();

  const handleLogin = () => {
    loginWithRedirect();
    setCookie('logout', false);
  }
  
  return <Button label='Log In' onClick={handleLogin} />
  // <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;