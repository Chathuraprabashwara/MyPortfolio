import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>

          </div>
          <p>I am an energetic, self-motivated, and hardworking graduated Computer Science student at Eastern University Trincomalee Campus. Consisting with smart teamwork
abilities to create a perfect fit for the team.Looking forward to building a career in a growing organization in ICT, where I can get the opportunities to prove my abilities by accepting challenges, fulfilling the organizational goal.</p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  );
};

export default About;
