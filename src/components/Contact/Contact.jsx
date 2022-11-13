import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o4hep2v', 'template_jz7aauc', form.current, '9uaR6We97zPxuKv5e')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

const data = [
  {
    id:1,
    message: "Send a message",
    mail:"chathuraprabashwara@gmail.com",
    link:"mailto:chathuraprabashwara@gmail.com",
    icon:<MdOutlineEmail className='contact__option-icon' />,
    header:"Email"
    
  },
  {
    id:2,
    message: "Send a messag",
    mail:"Chathura Prabashwara",
    link:"https://m.me/chathuraprabashwara123/",
    icon:<RiMessengerLine className='contact__option-icon'/>,
    header:"Messanger"
    
  },
  {
    id:3,
    message: "Send a messag",
    mail:"+94710182989",
    link:"https://api.whatsapp.com/send?phone=94710182989",
    icon:<BsWhatsapp className='contact__option-icon'/>,
    header:"Whatsapp"
    
  }
]

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Conatact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
     { data.map((data)=>  <article className="contact__option">
          {data.icon}
          <h4>{data.header}</h4>
          <h5>{data.mail}</h5>
          <a href={data.link} target={'_blank'}>{data.message}</a>
        </article>)}
        </div>
        {/* End of contact options */}
        <form ref={form}  onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary '> Send Message</button>

        </form>
      </div>
    </section >
  )
}

export default Contact