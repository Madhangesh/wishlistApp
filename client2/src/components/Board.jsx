import React from "react";
import Column from "./Column";
import "../styles/Board.css";

const Board = ({ wishes, updateWish,deleteWish }) => {
  const toDo = wishes.filter((wish) => !wish.bookmarked && !wish.completed);

  return (
    <div className="board">
      <Column
        className="column-width"
        title="To Do"
        wishes={toDo}
        updateWish={updateWish}
        deleteWish={deleteWish}
      />
    </div>
  );
};



export default Board;
