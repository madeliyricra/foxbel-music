import React, { useEffect, useState } from "react";
import Icon from "../../components/Icon";

const Footer = ({
  albumImage,
  musicName,
  authorName,
  albumName,
  audio,
  play,
  setPlay,
}) => {
  const [sound, setSound] = useState(100);

  const volumeAudio = () => {
    const VOLUME_COUNT = sound / 100;
    audio.volume = VOLUME_COUNT;
  };

  const handlePlay = () => {
    if (audio.paused || audio.ended) {
      setPlay(true);
      audio.play();
      volumeAudio();
    } else {
      setPlay(false);
      audio.pause();
    }
  };

  const handleMouseMove = (e) => {
    const value = e.target.value;
    setSound(value);
    volumeAudio();
  };

  return (
    <div className="dashboard-footer">
      <section className="footer-music">
        <img src={albumImage} alt={musicName} />
        <div className="footer-description">
          <h2>{musicName}</h2>
          <p>
            {authorName} - {albumName}
          </p>
        </div>
      </section>
      <section className="footer-play">
        <div className="footer-play-icons">
          <Icon name="play-left" />
          <div className="icon-play" onClick={handlePlay}>
            <Icon name={play ? "play-start" : "play"} />
          </div>
          <Icon name="play-rigth" />
        </div>
      </section>
      <section className="footer-volume">
        <div className="volume-content">
          <input
            type="range"
            className="input-range"
            defaultValue={sound}
            min="0"
            max="100"
            onMouseMove={(e) => handleMouseMove(e)}
          />
        </div>
        <div className="icon-volume">
          <svg viewBox="0 0 180 140">
            <g fill="none" stroke="#fff" strokeWidth="2">
              <path
                d="M50,50 L50,100 L80,100 L100,120 L110,120 L110,30 L100,30 L80,50 47,50"
                strokeWidth="6"
                fill="#fff"
              />
              <path
                d="M120,30 A120,100 0 0,1 120,120"
                className="sound"
                style={sound > 0 ? { display: "block" } : { display: "none" }}
              />
              <path
                d="M130,20 A120,100 0 0,1 130,130"
                className="sound"
                style={sound > 0 ? { display: "block" } : { display: "none" }}
              />
              <line
                x1="40"
                y1="120"
                x2="130"
                y2="10"
                stroke="#662323"
                strokeWidth="6"
                id="mute"
                style={sound > 0 ? { display: "none" } : { display: "block" }}
              />
            </g>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Footer;
