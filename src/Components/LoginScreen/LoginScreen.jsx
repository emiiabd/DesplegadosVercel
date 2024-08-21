import React from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";
import './LoginScreen.css';
import { formSchema } from "../../Data/data";
import { v4 as uuid } from "uuid";


const LoginScreen = ({handleLoginSubmit,}) => {
  const {errorsValues} = useGlobalContext();

  //Geting the login Schema
  const loginSchema = {};
  for(const prop in formSchema){
    if(prop === 'password' || prop === 'username'){
      loginSchema[prop] = formSchema[prop];
  }};

  const renderForm = [];
  for(const prop in loginSchema){
    renderForm.push(
      <div className="inputs" key={uuid()}>
        <label htmlFor={prop}>{formSchema[prop].labelText}</label>
        <input
          type={prop === 'password' ? 'password' : 'text'}
          name={prop}
          id={prop}
          placeholder={formSchema[prop].placeholder}
        />
      </div>
    );
  };

  return (
    <>
      <div className="loginForm">
        <div className="title">
          <h3>Iniciar Sesion</h3>
        </div>
        <form onSubmit={handleLoginSubmit}>
          {renderForm}
          {
            errorsValues.map((i, index) => {
              if(i){
                return <span className='errorForm' key={index}>{i}</span>
              }
            })
          }
          <div className="buttons">
            <Link className='btn' to={'/register'}> Registrarse </Link>
            <input className='btn' type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
