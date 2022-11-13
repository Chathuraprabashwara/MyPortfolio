import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data =[
  {
    id:1,
    image:IMG1, 
    link:"https://github.com/Chathuraprabashwara/Netflix-clone-ReactJS-TaliwindCSS",
    link2:"https://github.com/Chathuraprabashwara/Netflix-clone-ReactJS-TaliwindCSS"
  },

  {
    id:2,
    image:IMG2, 
    link:"https://github.com/Chathuraprabashwara/Netflix-clone-ReactJS-TaliwindCSS",
    link2:"https://github.com/Chathuraprabashwara/Netflix-clone-ReactJS-TaliwindCSS"
  },
  {
    id:3,
    image:IMG3, 
    link:"https://github.com/Chathuraprabashwara/Netflix-clone-ReactJS-TaliwindCSS",
    link2:"https://github.com/Chathuraprabashwara/Netflix-clone-ReactJS-TaliwindCSS"
  },
  { id:4,
    image:IMG4, 
    link:"https://github.com/Chathuraprabashwara/Netflix-clone-ReactJS-TaliwindCSS",
    link2:"https://github.com/Chathuraprabashwara/Netflix-clone-ReactJS-TaliwindCSS"
  },



]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>

    <div className="container portfolio__container">
  { data.map((data)=>  <article key={data.id} className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={data.image} alt="" />
      </div>

        <h3>This is portfolio item title</h3>
       <div className="portfolio__item-cta">
       <a className='btn'  href={data.link} target="_blank">Github</a>
        <a className='btn btn-primary'  href={data.link2} target="_blank">Live Demo</a>
       </div>
      
      </article>)}
    </div>

    </section>
  )
}

export default Portfolio