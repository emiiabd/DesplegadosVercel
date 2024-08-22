import React from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import { v4 as uuid } from "uuid";
import { formSchema } from "../../Data/data";

const RegisterScreen = ({ handleRegisterSubmit }) => {
  
  //Context
  const { errorsValues } = useGlobalContext();

  //Geting the formRegister from formSchema
  const renderForm = [];
  for(const prop in formSchema){
    renderForm.push(
      <div className="inputs" key={uuid()}>
        <label htmlFor={prop}>{formSchema[prop].labelText}</label>
        <input
          type={prop === 'password' || prop === 'rptPassword' ? 'password' : 'text'}
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
          <h3>Registrarse</h3>
        </div>
        <form onSubmit={handleRegisterSubmit}>
          <div className="formScreen">
            {renderForm}
            {
              errorsValues.map((i, index) => {
                if(i){
                  return <span className="errorForm" key={index}>{i}</span>
                }
              })
            }
          </div>
          <div className="buttons">
            <Link className="btn" to={"/login"}>Logearse</Link>
            <input className="btn" type="submit" value="Registrarse" />
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterScreen;