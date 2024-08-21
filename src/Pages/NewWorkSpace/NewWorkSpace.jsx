import React, { useEffect, useState } from "react";
import "./NewWorkSpace.css";
import { NavBar, NewWSRender } from "../../Components";
import { generarWorkSpace, generateGeneralChannel, generateNewChannel, getLocalUser, getUserById } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../../Data/validations";
import { useGlobalContext } from "../../Context/GlobalContext";

const NewWorkSpace = () => {

  //States and navigate
  const navigate = useNavigate();
  const [data, setData] = useState([])

  //Context
  const {addError, deleteError, setErrors} = useGlobalContext();

  //Reset Errors
  useEffect(() => {
    setErrors({});
  }, []);
  
  //Handlers
  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }

  const validationEmpty = validationSchema['empty'];
  
  const handleCreateNewWorkSpace = (e) => {
    e.preventDefault();

    if(!(validationEmpty.validate(data.WSname))){
      addError(validationEmpty.errorText, 'WSname');
      return;
    }else{
      deleteError('WSname');
    };

    const userData = getUserById(getLocalUser().userId);
    const channels = [generateGeneralChannel()];
    //Exist a new channel?
    data.NewChannel ? channels.push(generateNewChannel(data.NewChannel)) : null;
    userData.userMemory.push(
      {
        workSpace: data.WSname, 
        workSpaceID: userData.userMemory.length+1, 
        workSpaceThumbnail: '', 
        channels: channels
      });
    generarWorkSpace(userData);
    return navigate('/');
  };

  return (
    <>
    <NavBar/>
    <div className="mainView NewWS">
      <NewWSRender handleCreateNewWorkSpace={handleCreateNewWorkSpace} handleOnChange={handleOnChange}/>
    </div>
    </>
  );
};

export default NewWorkSpace;
