import React from "react";
import "./NewWSRender.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";

const NewWSRender = ({handleCreateNewWorkSpace, handleOnChange}) => {

  //Context
  const {errorsValues} = useGlobalContext();
  
  return (
    <>
      <form className="newWS" onSubmit={handleCreateNewWorkSpace}>
        <div className="title">
          <h3>Crear un nuevo workspace</h3>
        </div>
        <div className="formScreen">
          <div className="inputs">
            <label htmlFor="WSname">Nombre del WorkSpace</label>
            <input
              type="text"
              name="WSname"
              id="WSname"
              placeholder="Nombre"
              onChange={handleOnChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor="NewChannel">Desea crear un canal?</label>
            <input
              type="NewChannel"
              name="NewChannel"
              placeholder="Nombre del canal"
              onChange={handleOnChange}
            />
          </div>
        </div>
        {
          errorsValues.map((i, index) => {
            if(i){
              return <span className='errorForm' key={index}>{i}</span>
            }
          })
        }
        <div className="buttons btnBig">
          <Link className="btnNW Cancelar" to={'../'} >Cancelar</Link>
          <input className="btnNW Submit" type="submit" value="Crear" />
        </div>
      </form>
    </>
  );
};

export default NewWSRender;
