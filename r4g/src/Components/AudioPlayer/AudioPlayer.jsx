// src/components/AudioPlayer.js

import React, { useState, useRef, useEffect } from "react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // Set the loop attribute to enable looping
    audio.loop = true;

    if (isPlaying) {
      audio
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    } else {
      audio.pause();
    }

    // Optional: You can also handle the end of the audio to restart playback
    const handleEnd = () => {
      audio.currentTime = 0; // Reset the playback position to the beginning
      audio
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    };

    audio.addEventListener("ended", handleEnd);

    // Cleanup event listener on component unmount
    return () => {
      audio.removeEventListener("ended", handleEnd);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src="/forest-song.mp3" autoPlay />
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default AudioPlayer;
