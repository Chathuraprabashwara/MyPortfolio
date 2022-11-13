import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='list-icon'/>
            <p>User stories</p>
            </li>
            <li>
              <BiCheck className='list-icon'/>
            <p>User flow charts, diagrams</p>
            </li>
            <li>
              <BiCheck className='list-icon'/>
            <p>Wireframes</p>
            </li>
            <li>
              <BiCheck className='list-icon'/>
            <p>Content strategy</p>
            </li>
            {/* <li>
              <BiCheck className='list-icon'/>
            <p>Brand and design system development</p>
            </li> */}
            <li>
              <BiCheck className='list-icon'/>
            <p>Design technology consulting</p>
            </li>
          </ul>
        </article>
        {/* End of ui/ux */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='list-icon'/>
            <p>Blog / News Management</p>
            </li>
            <li>
              <BiCheck className='list-icon'/>
            <p>Responsive UI </p>
            </li>
            <li>
              <BiCheck className='list-icon'/>
            <p>Online Ordering System </p>
            </li>
            <li>
              <BiCheck className='list-icon'/>
            <p>Document Management System</p>
            </li>
            {/* <li>
              <BiCheck className='list-icon'/>
            <p>Brand and design system development</p>
            </li>
            <li>
              <BiCheck className='list-icon'/>
            <p>Design technology consulting</p>
            </li> */}
          </ul>
        </article>
        {/* end of web development*/}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='list-icon'/>
            <p>Video content</p>
            </li>
            <li>
              <BiCheck className='list-icon'/>
            <p> Blog posts</p>
            </li>
            <li>
              <BiCheck className='list-icon'/>
            <p>Interactive content</p>
            </li>
            <li>
              <BiCheck className='list-icon'/>
            <p>Email Marketing</p>
            </li>
            <li>
              <BiCheck className='list-icon'/>
            <p>Ebooks</p>
            </li>
            {/* <li>
              <BiCheck className='list-icon'/>
            <p>Design technology consulting</p>
            </li> */}
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services