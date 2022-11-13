import { React, useRef, useState } from "react";
import Music from "../../assets/music.mp3";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePlayCircle,AiOutlinePauseCircle,AiOutlineUser } from "react-icons/ai";
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import './nav.css';
const Nav = () => {
  const [playing, setPlaying] = useState(false);
  const [activeNav,setActiveNav] = useState('#')

  const audioRef = useRef(new Audio(Music));

  const play = () => {
    setPlaying(true);
    audioRef.current.play();
  };
  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  return (
    <>
    <nav>
      <a onClick={playing ? pause : play}className={playing ? 'play' : ''} >
      {playing? <AiOutlinePauseCircle/> : <AiOutlinePlayCircle/>}
      </a>
      <a href="#" onClick={()=> setActiveNav("#")}className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav("about")}className={activeNav ==='about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav("experience")}className={activeNav ==='experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={()=> setActiveNav("services")}className={activeNav ==='services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact"  onClick={()=> setActiveNav("contact")}className={activeNav ==='contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
    </>
  );
};

export default Nav;
