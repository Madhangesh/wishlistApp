import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./components/Board.jsx";
import Navbar from "./components/Navbar.jsx";
import AddWish from "./components/AddWish.jsx";
import "./App.css";
import Bookmarked from "./components/Bookmarked.jsx";
import Completed from "./components/Completed.jsx";
import axios from "axios";

function App() {
  const [wishes, setWishes] = useState([]);

  const addWish = async (wish) => {
    setWishes([...wishes, wish]);
    const result = await axios.post("http://localhost:5000/insertWish", wish);
    console.log("inserted", result.data.wishlist);
    setWishes(result.data.wishlist);
  };

  const updateWish = async (index, updatedWish) => {
    const newWishes = [...wishes];

    let result = [];

    if (wishes[index].isbookmarked != updatedWish.isbookmarked) {
      let result1 = await axios.post(
        "http://localhost:5000/toggleBookmark",
        updatedWish
      );
      result=result1.data.wishlist
    } else if (wishes[index].iscompleted != updatedWish.iscompleted) {
      let result1 = await axios.post(
        "http://localhost:5000/toggleComplete",
        updatedWish
      );
      result = result1.data.wishlist;
    }

    
    setWishes(result);
  };


  async function deleteWish(wish){
    let result = await axios.put("http://localhost:5000/deleteWish",wish);
    setWishes(result.data.wishlist);

  }

  async function getWish() {
    const result = await axios.get("http://localhost:5000/getWish");
    setWishes(result.data.wishlist);
  }

  useEffect(() => {
    getWish();
  }, [wishes]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <Routes>
            <Route path="/add-wish" element={<AddWish addWish={addWish} />} />
            <Route
              path="/bookmarked"
              element={
                <Bookmarked
                  wishes={wishes}
                  updateWish={updateWish}
                  deleteWish={deleteWish}
                />
              }
            />
            <Route
              path="/completed"
              element={
                <Completed
                  wishes={wishes}
                  updateWish={updateWish}
                  deleteWish={deleteWish}
                />
              }
            />
            <Route
              path="/"
              element={
                <Board
                  wishes={wishes}
                  updateWish={updateWish}
                  deleteWish={deleteWish}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
