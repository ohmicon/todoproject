import "./Todolist.css";
import { useState } from "react";
import { Modal } from "antd";
import React from "react";

function Todolist(props) {

  const { todoList, deleteList} = props;
  return (
    <div>
      <div className="Todo-list">
        {todoList.title}
        <button onClick={() => deleteList(todoList)} className="Todo-list-button" >
          X
        </button>
        </div>
    </div>
  );
}
export default Todolist;
