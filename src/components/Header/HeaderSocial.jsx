import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiFiverr} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import "./header.css"
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <div><a href="https://www.linkedin.com/in/chathura-prabashwara-0b10371aa/" target="blank"><BsLinkedin/></a></div>
       <div> <a href="https://github.com/Chathuraprabashwara" target="blank"><BsGithub/></a></div>
        <a href="https://www.fiverr.com/chathuraprabash?up_rollout=true" target="blank"><SiFiverr/></a>
    </div>
  )
}

export default HeaderSocial