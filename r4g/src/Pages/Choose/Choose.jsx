import React from "react";
import "./Choose.scss";

const Choose = () => {
  return (
    <>
      {/* CHOOSE PLAYERS */}
      <h2>Choose Number of Players</h2>
      <form>
        <div className="radio-flexbox">
          <label class="container">
            2
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            3
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            4
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            5
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            6
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            7
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            8
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>
        {/* CHOOSE GAME TYPE*/}
        <h2>Choose Type of Game</h2>
        <div className="radio-flexbox">
          <label class="container">
            Strategy
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Cooperative
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Family Friendly
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Competitive
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Euro
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>
        {/* CHOOSE DIFFICULTY*/}
        <h2>Choose Level of Difficulty</h2>
        <div className="radio-flexbox">
          <label class="container">
            Beginner
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Intermediate
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Advanced
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>
        {/* CHOOSE GAME LENGTH*/}
        <h2>Choose Game Length</h2>
        <div className="radio-flexbox">
          <label class="container">
            15-30 mins
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            1/2-1 hr
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            1-2 hrs
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            2-4 hrs
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>
      </form>
    </>
  );
};

export default Choose;
