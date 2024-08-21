import React from "react";
import "./BtnHidden.css";
import { TbAlignBoxLeftMiddle } from "react-icons/tb";

const BtnHidden = ({renderHiddenNav}) => {
return ( 
  <button className='btnHidden' onClick={renderHiddenNav} >
    <TbAlignBoxLeftMiddle />
  </button>
  );
};

export default BtnHidden;
