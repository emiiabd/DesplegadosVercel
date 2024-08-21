import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {DATA} from '../Data/data';
import { getUserInfo, getUsuariosEnLocal } from "../helpers/helpers";


const GlobalContext = createContext();


export const GlobalContextProvider = ({children}) =>{
  
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') ? true : false);
  const navigate = useNavigate();
  useEffect(() => {
  if(!isLoggedIn) navigate('/login')}, []);
  
  const [errors, setErrors] = useState({});

  const handleLogOut = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  const addError = (error, origen) =>{
    setErrors((prevState) => ({...prevState, [origen]: error}));
  };

  const deleteError = (origen) => {
    setErrors((prevState) => ({...prevState, [origen]: ''}));
  };
  
  const USERS = getUsuariosEnLocal();
  
  const {
    name,
    userId,
  } = getUserInfo();
  const userID = userId;
  
  const errorsValues = Object.values({...errors});

  return(
    <GlobalContext.Provider value={
      {
      DATA: DATA,
      USERS: USERS,
      isLoggedIn,
      setIsLoggedIn,
      addError,
      deleteError,
      setErrors,
      errors,
      handleLogOut,
      userID,
      name,
      errorsValues,

      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);