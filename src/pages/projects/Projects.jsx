import React from 'react'
import img1 from "../../img/model-1.jpg"
import img2 from "../../img/project-1.jpg"
import img3 from "../../img/project-2.jpg"
import img4 from "../../img/project-3.jpg"
import img5 from "../../img/project-4.jpg"
import img6 from "../../img/project-5.jpg"


const Projects = () => {
  return (<>
    <div className="project-bgImg-container">
    <div className="projects__bio-image">
        <h1 className='myProject'>My Projects</h1>
      </div></div>
    <div><main className="projects">
    <div className="projects__items">
      <div className="projects__item">
        <img src={img1} alt="My Project" />
      </div>

      <div className="projects__item">
        <img src={img2} alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={img3} alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={img4}  alt="My Project" />
      </div>

      <div className="projects__item">
        <img src={img5}  alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={img6}  alt="My Project" />
      </div>
    </div>
  </main>

  
  <footer class="vertical">
    <div class="social-icons">
      <a href="#twitter">
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a href="#facebook">
        <i class="fab fa-facebook fa-2x"></i>
      </a>
      <a href="#instagram">
        <i class="fab fa-instagram fa-2x"></i>
      </a>
      <a href="#github">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>

    <div class="copyright">&copy; Copyright 2023</div>
  </footer></div></>
  )
}

export default Projects