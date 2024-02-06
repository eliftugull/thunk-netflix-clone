
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Startpage = () => {
  const history = useNavigate();

  const handleStart = () => {
    
history.push("/");
  };


  useEffect(() => {
    const audio = new Audio('netflix-intro.mp3') ;
    audio.play();
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    
    <div className="opening-screen" onClick={() => history('/main')}>
      <div className="background-image">
        <video src="background-video.mp4" autoPlay muted loop />
      </div>
    </div>
  );
};


export default Startpage;
