import React, { useEffect } from "react";

const AudioPlayer = () => {
  useEffect(() => {
    const audio = new Audio("/path/to/song.mp3");
    audio.play();

    // Optional: You can stop the audio when the component unmounts
    return () => audio.pause();
  }, []);

  return <div>{/* Add any additional components or UI elements here */}</div>;
};

export default AudioPlayer;
