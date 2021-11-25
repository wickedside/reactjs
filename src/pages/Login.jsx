import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context";

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const loginData = {login: "11", password: "11"}
  const [error, setError] = useState('')
  const [inputData, setInputData] = useState({
    login: '',
    password: '',
  });


  const login = () =>{
    if (loginData.login === inputData.login && loginData.password === inputData.password) {
      localStorage.setItem('auth', 'true')
      setIsAuth(true)
    }
    setError('Wrong data')
  }

  const onChange = (e) => {
    const field = {}
    field[e.target.id] = e.target.value
    setInputData((data) =>({...data, ...field}))
    setError('')
      }

  return(
    <div className='container'>
    <h3>Log in</h3>




    <div className="input-field col s6">
      <i className="material-icons prefix">account_circle</i>
      <input
        id="login"
        type="text"
        className="validate"
        onChange = {onChange}
        placeholder="Enter Name"

      />
    </div>
    <div className="input-field col s6">
      <i className="material-icons prefix">account_circle</i>
      <input
        id="password"
        type="password"
        className="validate"
        onChange = {onChange}
        placeholder="Enter password"
      />
{error && <h5 className="red-text text-darken-4">{error}</h5>}
      <div className="row m-1">
        <div className="col s4">
          <a className="waves-effect waves-light btn" onClick={() => login()}>
            Log in
          </a>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Login;
