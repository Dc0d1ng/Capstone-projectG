import "./Cards.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Cards = () => {
  const [gameData, setGameData] = useState([]);
  const [likedStates, setLikedStates] = useState([false]);
  const params = useParams();

  const handleLiked = (index) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index];
    setLikedStates(newLikedStates);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/${params.players}/${params.difficulty}/${params.length}`
        );
        console.log(res.data);
        setGameData(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

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
            <a className="cards__link" href={game.link}>
              BGG Link
            </a>
          </div>
        </div>
      ))}
      <div className="cards__button-flex">
        <Link to="/choose">
          <button className="cards__button">Changed your Mind?</button>
        </Link>
        <Link to="/">
          <button className="cards__button-home">Country Roooads</button>
        </Link>
      </div>
    </section>
  );
};

export default Cards;
