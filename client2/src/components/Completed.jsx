import React from "react";
import Task from "./Task";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/Completed.css";

const CompletedWishes = ({ wishes, updateWish }) => {
  const handleComplete = (index) => {
    updateWish(index, {
      ...wishes[index],
      iscompleted: !wishes[index].iscompleted,
    });
  };

  return (
    <div className="completed-container">
      <h2 className="section-heading">Completed Wishes</h2>
      <div className="task-container">
        {wishes.map(
          (wish, index) =>
            wish.iscompleted && (
              <Card key={index} className="task-card completed">
                <Card.Body>
                  <Card.Title>{wish.wishtitle}</Card.Title>
                  <Card.Text>{wish.wishdesc}</Card.Text>
                  <Card.Text>
                    {new Date(wish.wishdate).toLocaleDateString()}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{wish.wishcategory}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <button
                    className="btn btn-success"
                    onClick={() => handleComplete(index)}
                  >
                    {wish.iscompleted ? "Undo" : "Complete"}
                  </button>
                </Card.Body>
              </Card>
            )
        )}
      </div>
    </div>
  );
};

export default CompletedWishes;
