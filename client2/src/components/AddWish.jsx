import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Addwish.css";

const AddWish = ({ addWish }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [cId,setcId]=useState("");

  const navigate = useNavigate();

  const handleAddWish = () => {
    if (title.trim() && category.trim() && date.trim() && description.trim()) {
      addWish({
        title,
        category,
        date,
        description,
        bookmarked: false,
        completed: false,
      });
      setTitle("");
      setCategory("");
      setDate("");
      setDescription("");
      navigate("/"); // Navigate back to the board after adding a wish
    }
  };


  function handleCategory (categoryName ,e){
    setCategory(categoryName);
    
    document.getElementById(e.target.id).style.backgroundColor="green"

    for(let i=1;i<=4;i++){
      if(`c${i}`!=e.target.id){
        document.getElementById(`c${i}`).style.backgroundColor = "#3498db";
      }
    }

  }

  return (
    <div className="add-wish">
      <h2>Create New Wish</h2>
      <form>
        <label>Wish Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Select Category</label>
        <div className="categories">
          <button
            type="button"
            id="c1"
            
            onClick={(e) => handleCategory("To have",e)}
          >
            To have
          </button>
          <button
            type="button"
            id="c2"
            onClick={(e) => handleCategory("To be",e)}
          >
            To be
          </button>
          <button
            type="button"
            id="c3"
            onClick={(e) => handleCategory("To meet",e)}
          >
            To meet
          </button>

          <button
            type="button"
            id="c4"
            onClick={(e) => handleCategory("To go",e)}
          >
            To go
          </button>
        </div>

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="button" onClick={handleAddWish}>
          Create Wish
        </button>
      </form>
    </div>
  );
};

export default AddWish;
