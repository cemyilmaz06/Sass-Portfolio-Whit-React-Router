import React from 'react'
import "./About.scss"
const About = () => {
  return (
    <div className="about-bgImg-container" >
    <div className="about__bio-image">
    <h2>BIO</h2>
    <p>
        Wednesday Addams is a fictional character from the Addams Family multimedia franchise created by American cartoonist Charles Addams. She is typically portrayed as a morbid and emotionally reserved child that is fascinated by the macabre, often identified by her pale skin and black pigtails. Wednesday has been portrayed by several actresses in various films and television series, including Lisa Loring in the television series The Addams Family (1964), Christina Ricci in the feature films The Addams Family (1991) and Addams Family Values (1993), and Jenna Ortega in the streaming television series Wednesday (2022).
    </p>
  </div>
<main className="about">
  <div className="about__container">
    <div className="about__job">
      <h2 className="text-secondary">2020 - 2021</h2>
      <h3>CLARUSWAY</h3>
      <h6>Instructor & Full Stack Developer</h6>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        vero dolores eum ut, culpa ullam quis quasi exercitationem in
        adipisci.
      </p>
    </div>
    <div className="about__job">
      <h2 class="text-secondary">2019 - 2020</h2>
      <h3>Google</h3>
      <h6>Front End Developer</h6>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        vero dolores eum ut, culpa ullam quis quasi exercitationem in
        adipisci.
      </p>
    </div>
    <div className="about__job">
      <h2 class="text-secondary">2017 - 2019</h2>
      <h3>The Best Websites Co.</h3>
      <h6>Front End Developer</h6>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        vero dolores eum ut, culpa ullam quis quasi exercitationem in
        adipisci.
      </p>
    </div>
  </div>
</main>


<footer className="vertical">
  <div className="social-icons">
    <a href="#twitter">
      <i className="fab fa-twitter fa-2x"></i>
    </a>
    <a href="#facebook">
      <i className="fab fa-facebook fa-2x"></i>
    </a>
    <a href="#instagram">
      <i className="fab fa-instagram fa-2x"></i>
    </a>
    <a href="#github">
      <i className="fab fa-github fa-2x"></i>
    </a>
  </div>
  <div className="copyright">&copy; Copyright 2023</div>
</footer>
</div>
  )
}

export default About