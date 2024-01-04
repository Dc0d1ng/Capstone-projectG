import "./Cards.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Cards = () => {
  const [gameData, setGameData] = useState([]);
  const [likedStates, setLikedStates] = useState([false]);
  const params = useParams();
  console.log("Message:", params);

  const handleLiked = (index) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index];
    setLikedStates(newLikedStates);
  };

  const fetchData = async () => {
    console.log("Fetching data...");
    try {
      const response = await axios.get("http://localhost:8000/api/games");
      const gameData = response.data;
      console.log(response);
      console.log("Fetched Data:", gameData);
      setGameData(gameData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ...

  return (
    <section className="cards">
      {gameData.map((game, index) => (
        <div key={index}>
          <div
            className={`cards__content ${
              index === 0 ? "cards__content--selected" : ""
            }`}
          >
            <div
              className={`cards__content__fav-filled ${
                likedStates[index] ? "liked" : ""
              }`}
              onClick={() => handleLiked(index)}
            >
              {likedStates[index] ? (
                <MdFavorite className="cards__fav-filled" />
              ) : (
                <MdFavoriteBorder className="cards__fav-outline" />
              )}
            </div>

            {game.thumbnail && (
              <img
                className="cards__img"
                src={game.thumbnail}
                alt={`Game ${index}`}
              />
            )}
            <h3 className="cards__header">{game.name}</h3>
            <p className="cards__text">{game.description}</p>
            {/* <a className="cards__link" href="#">
              Read More
            </a> */}
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
