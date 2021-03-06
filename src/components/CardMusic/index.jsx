import React from "react";
import Icon from "../../components/Icon";

const CardMusic = ({ image, name, author, handleClick }) => {
  return (
    <div className="card-music">
      <div className="music-play">
        <Icon name="play" className="" handleClick={handleClick} />
        <img src={image} alt={name} />
      </div>
      <div className="card-music-description">
        <h5>{name}</h5>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default CardMusic;
