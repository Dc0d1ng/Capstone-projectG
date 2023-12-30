import React from "react";
import "./Cards.scss";
import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Cards = () => {
  return (
    <section className="cards">
      <div className="cards__content cards__content--selected">
        <MdFavoriteBorder className="cards__fav-icon" />
        <img className="cards__img" src="http://placekitten.com/g/100/100" />
        <h3 className="cards__header">Game title</h3>
        <p className="cards__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          repellat mollitia voluptas voluptates id esse eum ipsa amet, iure
          excepturi, necessitatibus nesciunt pariatur minima quo facere error
          fugiat, hic qui?
        </p>
        <a className="cards__link" href="#">
          Read More
        </a>
      </div>
      <div className="cards__content">
        <MdFavoriteBorder className="cards__fav-icon" />
        <img className="cards__img" src="http://placekitten.com/g/100/100" />
        <h3 className="cards__header">Game title</h3>
        <p className="cards__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          repellat mollitia voluptas voluptates id esse eum ipsa amet, iure
          excepturi, necessitatibus nesciunt pariatur minima quo facere error
          fugiat, hic qui?
        </p>
        <a className="cards__link" href="#">
          Read More
        </a>
      </div>
      <div className="cards__content">
        <MdFavoriteBorder className="cards__fav-icon" />
        <img className="cards__img" src="http://placekitten.com/g/100/100" />
        <h3 className="cards__header">Game title</h3>
        <p className="cards__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          repellat mollitia voluptas voluptates id esse eum ipsa amet, iure
          excepturi, necessitatibus nesciunt pariatur minima quo facere error
          fugiat, hic qui?
        </p>
        <a className="cards__link" href="#">
          Read More
        </a>
      </div>
      <div className="cards__content">
        <MdFavoriteBorder className="cards__fav-icon" />
        <img className="cards__img" src="http://placekitten.com/g/100/100" />
        <h3 className="cards__header">Game title</h3>
        <p className="cards__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          repellat mollitia voluptas voluptates id esse eum ipsa amet, iure
          excepturi, necessitatibus nesciunt pariatur minima quo facere error
          fugiat, hic qui?
        </p>
        <a className="cards__link" href="#">
          Read More
        </a>
      </div>
      <button className="cards__button">One More Time!</button>
      <Link to="/">
        <button className="cards__button-home">Country Roooads</button>
      </Link>
    </section>
  );
};

export default Cards;
