import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useCookies } from "react-cookie";
import { Button } from 'sajad-react-component-library';


const LogoutButton = () => {
  const { logout } = useAuth0();
  const [ cookies, setCookie ] = useCookies()

  const handleLogout = () => {
    setCookie('logout', true);
    setCookie('isAuth1', false);
    setCookie('isAuth2', false);
    logout({ returnTo: window.location.origin });
  }

  return <Button label="Log Out" onClick={handleLogout} />
};

export default LogoutButton;
