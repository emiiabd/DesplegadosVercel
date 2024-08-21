import React from "react";
import { v4 as uuid } from "uuid";
import "./ChatMessages.css";
import { useGlobalContext } from "../../Context/GlobalContext";

const RenderMessages = ({ messages }) => {

  const { name } = useGlobalContext();

  const renderDate = (date) => {
    return (
      <div className="date" key={uuid()}>
        <hr />
        <div className="dateInfo">
          <span>{date}</span>
        </div>
      </div>
    );
  };

  let j = "";
  let bool = false;
  
  const messagesRender = messages.map((i) => {
    bool = false;
    if (i.date !== j) bool = true;

    j = i.date;

    return (
      <div className="messages" key={uuid()}>
        { bool && renderDate(j)}
        <div className={i.author === "yo" ? "messageBox Me" : "messageBox User"} key={uuid()}>
          <div className="msgImg">
            <img src={i.thumbnail} alt="" />
          </div>
          <div className="msgInfo">
            <div className="msgName">
              <p>{i.author === "yo" ? name : i.author}</p>
            </div>
            <div className="msgContent">
              <p>{i.content}</p>
            </div>
            <div className="msgHour">
              <p>{i.hour}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="messagesScreen">
      {messagesRender}
    </div>
  );
};

export default RenderMessages;
