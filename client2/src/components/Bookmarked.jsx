import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Column from "./Column";
import "../styles/Bookmarked.css";

const BookmarkedWishes = ({ wishes, updateWish }) => {
  const handleBookmark = (index) => {
    updateWish(index, {
      ...wishes[index],
      isbookmarked: !wishes[index].isbookmarked,
    });
  };

  return (
    <div className="bookmarked-container">
      <h2 className="section-heading">Bookmarked Wishes</h2>
      <div className="task-container">
        {wishes.map(
          (wish, index) =>
            wish.isbookmarked && (
              <Card key={index} className="task-card bookmarked">
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
                    className="btn btn-warning"
                    onClick={() => handleBookmark(index)}
                  >
                    {wish.isbookmarked ? "Unbookmark" : "Bookmark"}
                  </button>
                </Card.Body>
              </Card>
            )
        )}
      </div>
    </div>
  );
};

export default BookmarkedWishes;
