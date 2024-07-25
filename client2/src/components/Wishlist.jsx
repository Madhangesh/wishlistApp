import React, { useState } from "react";
import "../App.css";

const Wishlist = ({ addWish, updateWish, wishes }) => {
  const [wish, setWish] = useState("");

  const handleAddWish = () => {
    addWish({ text: wish, bookmarked: false, completed: false });
    setWish("");
  };

  const handleBookmark = (index) => {
    const updatedWish = {
      ...wishes[index],
      bookmarked: !wishes[index].bookmarked,
    };
    updateWish(index, updatedWish);
  };

  const handleComplete = (index) => {
    const updatedWish = { ...wishes[index], completed: true };
    updateWish(index, updatedWish);
  };

  return (
    <div>
      <h2>Wishlist</h2>
      <input
        type="text"
        value={wish}
        onChange={(e) => setWish(e.target.value)}
      />
      <button onClick={handleAddWish}>Add Wish</button>
      <ul>
        {wishes.map((wish, index) => (
          <li
            key={index}
            className={`${wish.completed ? "completed" : ""} ${
              wish.bookmarked && !wish.completed ? "bookmarked" : ""
            }`}
          >
            {wish.text}
            <div>
              <button onClick={() => handleBookmark(index)}>
                {wish.bookmarked ? "Unbookmark" : "Bookmark"}
              </button>
              <button onClick={() => handleComplete(index)}>
                {wish.completed ? "Completed" : "Complete"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
