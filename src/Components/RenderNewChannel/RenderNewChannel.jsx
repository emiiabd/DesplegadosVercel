import React, { useState } from "react";
import "./RenderNewChannel.css";
import { createNewChannel } from "../../helpers/helpers";
import { validationSchema } from "../../Data/validations";
import { useGlobalContext } from "../../Context/GlobalContext";

const RenderNewChannel = ({ renderNewChannelState, userId, workSpaceID }) => {

  //States and context
  const {addError, deleteError, errorsValues} = useGlobalContext();
  const [name, setName] = useState("");

  //Handlers
  const handleChangeOnValue = (e) => {
    setName({...name,[e.target.name]: e.target.value});
  };

  const validationEmpty = validationSchema['empty'];
  
  const handleCreateNewChannel = (e) => {
    e.preventDefault();

    if(!(validationEmpty.validate(name.nombre))){
      addError(validationEmpty.errorText, 'NewChannelname');
      return;
    }else{
      deleteError('NewChannelname');
    };

    createNewChannel(e, userId, workSpaceID, name.nombre);
    renderNewChannelState();
  };

  return (
    <div className="hiddenCreateChannel">
      <form action="" className="createChannelForm" onSubmit={handleCreateNewChannel}>
        <label htmlFor="Nombre">Nombre del Canal</label>
        <input className="inputsCreateChannel" type="text" name="nombre" id="Nombre" placeholder="Nombre del Canal" onChange={handleChangeOnValue} />
        {
          errorsValues.map((i, index) => {
            if(i){
              return <span className='errorForm' key={index}>{i}</span>
            }
          })
        }
				<div className="buttonsNewChannel">
					<button className="inputsCreateChannel Cancelar" type='button' onClick={renderNewChannelState} > Cancelar </button>
					<input className="inputsCreateChannel Submit" type="submit" value="Crear" />
				</div>
      </form>
    </div>
  );
};

export default RenderNewChannel;
