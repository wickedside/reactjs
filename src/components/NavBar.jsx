import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import AuthContext from "../context"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/Themes";

const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')}

  const logout = () =>{
    localStorage.clear();
    setIsAuth(false)
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

<>

<GlobalStyles/>

    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Logo</a>

      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li><Link to='/devices'>Devices</Link></li>
        <a className="waves-effect waves-light btn" onClick={() => setIsAuth(false)}>
          <i className="material-icons right">exit_to_app</i>
          Log out
        </a>
      </ul>
    </div>
  </nav>

  </>
  </ThemeProvider>
  );
}
export default NavBar;
