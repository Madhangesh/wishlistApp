import React from "react";
import Task from "./Task";
import "../styles/Column.css";

const Column = ({ title, wishes, updateWish, deleteWish }) => {
  return (
    <div className="column-new">
      <div className="column-title">
        <h3 style={{ backgroundColor: "#fff" }}>{title}</h3>
      </div>

      <div className="column-items">
        {wishes.map((wish, index) => (
          <Task
            key={index}
            wish={wish}
            index={index}
            updateWish={updateWish}
            deleteWish={deleteWish}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
