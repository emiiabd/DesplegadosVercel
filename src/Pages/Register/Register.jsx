import React, { useEffect } from 'react';
import { NavBar, RegisterScreen } from '../../Components';
import { useGlobalContext } from '../../Context/GlobalContext';
import { registerNewUser } from '../../helpers/helpers';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { validationSchema } from '../../Data/validations';

const Register = () => {

  const { addError, deleteError, setErrors } = useGlobalContext();

  useEffect(() => {
    setErrors({});
  }, []);

  const navigate = useNavigate();

  //Shadow of the validationSchema
  const validationRegister = {};
  for(const prop in validationSchema){
    if(prop === 'password' || prop === 'username' || prop === 'name' || prop === 'rptPassword'){
      validationRegister[prop] = validationSchema[prop]
  }};

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let bool = false;
    const formData = new FormData(e.target);
    const formValues = {};

    for(const prop in validationRegister){
      formValues[prop] = formData.get(prop);

      if(!(validationRegister[prop].validate(formValues[prop]))){
        addError(validationRegister[prop].errorText, prop);
        bool = true;
      }else{
        deleteError(prop);
      };
    };

    if(bool){
      return;
    }else{
      registerNewUser(formValues.name ,formValues.username, formValues.password);
      return navigate('/login');
    };
};
  
  return (
    <>
    <NavBar/>
    <div className='mainView Register'>
      <RegisterScreen handleRegisterSubmit={handleRegisterSubmit}/>
    </div> 
    </>
  )
};

export default Register;