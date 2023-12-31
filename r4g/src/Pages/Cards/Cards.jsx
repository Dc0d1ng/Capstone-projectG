import React, { useState } from "react";
import "./Cards.scss";
import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Cards = () => {
  const [likedStates, setLikedStates] = useState([false, false, false, false]);

  const handleLiked = (index) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index];
    setLikedStates(newLikedStates);
  };

  return (
    <section className="cards">
      {likedStates.map((liked, index) => (
        <div key={index}>
          <div
            className={`cards__content ${
              index === 0 ? "cards__content--selected" : ""
            }`}
          >
            <div
              className={`cards__content__fav-filled ${liked ? "liked" : ""}`}
              onClick={() => handleLiked(index)}
            >
              {liked ? (
                <MdFavorite className="cards__fav-filled" />
              ) : (
                <MdFavoriteBorder className="cards__fav-outline" />
              )}
            </div>

            <img
              className="cards__img"
              src="http://placekitten.com/g/100/100"
              alt={`Game ${index}`}
            />
            <h3 className="cards__header">Game title</h3>
            <p className="cards__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              repellat mollitia voluptas voluptates id esse eum ipsa amet, iure
              excepturi, necessitatibus nesciunt pariatur minima quo facere
              error fugiat, hic qui?
            </p>
            <a className="cards__link" href="#">
              Read More
            </a>
          </div>
        </div>
      ))}
      <button className="cards__button">One More Time!</button>
      <Link to="/">
        <button className="cards__button-home">Country Roooads</button>
      </Link>
    </section>
  );
};

export default Cards;
