import React, { useEffect } from 'react';
import './login.css';
import { useGlobalContext } from '../../Context/GlobalContext';
import { LoginScreen, NavBar, RegisterScreen } from '../../Components';
import { setLocalUser } from '../../helpers/helpers';
import { useNavigate } from 'react-router-dom';
import { validationSchema } from '../../Data/validations';

const Login = () => {
  const navigate = useNavigate();

  // Context
  const {addError, deleteError, setErrors, USERS, setIsLoggedIn} = useGlobalContext();

  //Reset Errors
  useEffect(() => {
    setErrors({});
  }, []);

  //Shadow of the validationSchema
  const validationLogin = {};
  for(const prop in validationSchema){
    if(prop === 'password' || prop === 'username'){
      validationLogin[prop] = validationSchema[prop]
  }};

  //Login Submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginForm = {};

    for(const prop in validationLogin){
      loginForm[prop] = formData.get(prop);
      if(!(validationLogin[prop].validate(loginForm[prop]))){
        addError(validationLogin[prop].errorText, prop);
      }else{
        deleteError(prop);
      };
    };

    for(const user of USERS){
      if(user.password === formData.get('password') && user.username === formData.get('username')){
        setLocalUser(user);
        setIsLoggedIn(true);
        return navigate('/');
      }else{
        addError('Credenciales invalidas', 'username');
      };
    };
  };

  return (
    <>
    <NavBar/>
    <div className='mainView Login'>
      <LoginScreen handleLoginSubmit={handleLoginSubmit}/>
    </div>
    </>
  )
}

export default Login