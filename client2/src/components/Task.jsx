import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import wishimage from "../images/images/wishimage.jpg";
import "../styles/Task.css";

const Task = ({ wish, index, updateWish,deleteWish }) => {
  const handleBookmark = () => {
    updateWish(index, { ...wish, isbookmarked: !wish.isbookmarked });
  };

  const handleComplete = () => {
    updateWish(index, { ...wish, iscompleted: !wish.iscompleted });
  };

  const handleDelete = () => {
    deleteWish(wish);
  };

  return (
    <div
      className={`task ${
        wish.iscompleted ? "completed" : wish.isbookmarked ? "bookmarked" : ""
      }`}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={wishimage} className="custom-card-img" />
        <Card.Body>
          <Card.Title>{wish.wishtitle}</Card.Title>
          <Card.Text>{wish.wishdesc}</Card.Text>
          <Card.Text>{new Date(wish.wishdate).toLocaleDateString()}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{wish.wishcategory}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="bookmark" onClick={handleBookmark}>
            {wish.isbookmarked ? "Unbookmark" : "Bookmark"}
          </button>
          <button className="Complete" onClick={handleComplete}>
            {wish.iscompleted ? "Completed" : "Complete"}
          </button>
          <button
            className="delete"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Task;
