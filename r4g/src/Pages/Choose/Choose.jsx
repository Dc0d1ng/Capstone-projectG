import "./Choose.scss";
import Logo from "../../assets/r4g.jpeg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Choose = () => {
  const [players, setPlayers] = useState("2");
  const [type, setType] = useState("Family-friendly");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [length, setLength] = useState("15-30 mins");

  return (
    <>
      {/* CHOOSE PLAYERS */}
      <section className="choose-section">
        <Link to="/">
          <img className="header__logo" src={Logo} />
        </Link>
        <h2>Choose Number of Players</h2>
        <form>
          <div className="radio-flexbox">
            <label className="container container-flex">
              2
              <input
                type="radio"
                checked={players === "2"}
                onChange={() => setPlayers("2")}
                name="players"
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              3
              <input type="radio" name="players" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              4
              <input type="radio" name="players" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              5
              <input type="radio" name="players" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              6
              <input type="radio" name="players" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              7
              <input type="radio" name="players" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              8
              <input type="radio" name="players" />
              <span className="checkmark"></span>
            </label>
          </div>
          {/* CHOOSE GAME TYPE*/}
          <h2>Choose Type of Game</h2>
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
          </div>
          {/* CHOOSE DIFFICULTY*/}
          <h2>Choose Level of Difficulty</h2>
          <div className="radio-flexbox">
            <label className="container">
              Beginner
              <input
                type="radio"
                name="difficulty"
                checked={difficulty === "Beginner"}
                onChange={() => setDifficulty("Beginner")}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Intermediate
              <input type="radio" name="difficulty" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Advanced
              <input type="radio" name="difficulty" />
              <span className="checkmark"></span>
            </label>
          </div>
          {/* CHOOSE GAME LENGTH*/}
          <h2>Choose Game Length</h2>
          <div className="radio-flexbox">
            <label className="container">
              15-30 mins
              <input
                type="radio"
                name="length"
                checked={length === "15-30 mins"}
                onChange={() => setLength("15-30 mins")}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              1/2-1 hr
              <input type="radio" name="length" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              1-2 hrs
              <input type="radio" name="length" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              2-4 hrs
              <input type="radio" name="length" />
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
