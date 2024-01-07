import "./Choose.scss";
import Logo from "../../assets/r4g.jpeg";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Choose = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState("2");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [length, setLength] = useState("15-30 mins");
  // const [type, setType] = useState("Family-friendly");

  const handleSelectionSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/selectedGames", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          players,
          difficulty,
          length,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(
      `/choose/selected/${event.target.players.value}/${event.target.difficulty.value}/${event.target.length.value}`
    );
  };

  return (
    <>
      {/* CHOOSE PLAYERS */}
      <section className="choose-section">
        <Link to="/">
          <img className="header__logo" src={Logo} />
        </Link>
        <h2>Choose Number of Players</h2>
        <form onSubmit={handleSubmit}>
          <div className="radio-flexbox">
            <label className="container container-flex">
              2
              <input type="radio" defaultChecked value="2" name="players" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              3
              <input type="radio" name="players" value="3" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              4
              <input type="radio" name="players" value="4" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              5
              <input type="radio" name="players" value="5" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              6
              <input type="radio" name="players" value="6" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              7
              <input type="radio" name="players" value="7" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              8
              <input type="radio" name="players" value="8" />
              <span className="checkmark"></span>
            </label>
          </div>
          {/* CHOOSE GAME TYPE*/}
          {/* <h2>Choose Type of Game</h2>
          <div className="radio-flexbox">
            <label className="container">
              Family Friendly
              <input
                type="radio"
                checked={type === "Family-friendly"}
                onChange={() => setType("Family-friendly")}
                name="type"
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Strategy
              <input type="radio" name="type" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Cooperative
              <input type="radio" name="type" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Competitive
              <input type="radio" name="type" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Euro
              <input type="radio" name="type" />
              <span className="checkmark"></span>
            </label>
          </div> */}
          {/* CHOOSE DIFFICULTY*/}
          <h2>Choose Level of Difficulty</h2>
          <div className="radio-flexbox">
            <label className="container">
              Beginner
              <input
                type="radio"
                name="difficulty"
                value="beginner"
                defaultChecked
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Intermediate
              <input type="radio" name="difficulty" value="intermediate" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Advanced
              <input type="radio" name="difficulty" value="advanced" />
              <span className="checkmark"></span>
            </label>
          </div>
          {/* CHOOSE GAME LENGTH*/}
          <h2>Choose Game Length</h2>
          <div className="radio-flexbox">
            <label className="container">
              15 to 30 mins
              <input
                type="radio"
                name="length"
                value="15-30mins"
                defaultChecked
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              1/2 to 1 hr
              <input type="radio" name="length" value="30mins-1hr" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              1 to 2 hrs
              <input type="radio" name="length" value="1-2hrs" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              2 to 4 hrs
              <input type="radio" name="length" value="2-4hrs" />
              <span className="checkmark"></span>
            </label>
          </div>
          <button className="choices-submit">Time to Roll!</button>
        </form>
      </section>
    </>
  );
};

export default Choose;
