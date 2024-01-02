import "./Cards.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import axios from "axios";

const Cards = () => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.boardgamegeek.com/xmlapi2/thing?id=123&stats=1"
        );

        const xmlData = response.data;

        // Parse XML to JSON using DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "application/xml");
        const gameDetails = Array.from(xmlDoc.querySelectorAll("item"));

        if (gameDetails.length > 0) {
          const thumbnail =
            gameDetails[0].querySelector("thumbnail").textContent;
          const gameTitle = gameDetails[0].querySelector("name").textContent;
          const description =
            gameDetails[0].querySelector("description").textContent;

          setGameData([{ thumbnail, name: gameTitle, description }]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [likedStates, setLikedStates] = useState([false]);

  const handleLiked = (index) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index];
    setLikedStates(newLikedStates);
  };

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

            <img
              className="cards__img"
              src={game.thumbnail}
              alt={`Game ${index}`}
            />
            <h3 className="cards__header">{game.name}</h3>
            <p className="cards__text">{game.description}</p>
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
