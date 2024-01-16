import React, { useState, useRef, useEffect } from "react";
import "./AudioPlayer.scss";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src="/forest-song.mp3" />
      <button className="play-pause" onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play Forest Calms Music"}
      </button>
    </div>
  );
};

export default AudioPlayer;
