import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1-Blogging Site",
      img: "https://colorlib.com/wp/wp-content/uploads/sites/2/philosophy-free-mobile-friendly-website-template.jpg",
      gLink: "https://github.com/Bolendra2323/Project-1-Blogging-Site..git",
      
    },
    {
      title: "Project 2-Open-To-Intern",
      img: "https://png.pngtree.com/png-clipart/20210829/original/pngtree-blue-and-pink-color-theme-open-internship-on-a-linkedin-banner-png-image_6665585.jpg",
      gLink: "https://github.com/Bolendra2323/Project-2-Open-To-Intern.git",
      
    },
    {
      title: "Project 3-Book Management",
      img: "https://shoppy.b-cdn.net/wp-content/uploads/2018/12/34.png",
      gLink: "https://github.com/Bolendra2323/Project-3-Book-Management.git",
      
    },
    {
      title: "Project 4-URL-Shortner",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--7zad0N-E--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wyfftsnyadnin5cm2jkr.png",
      gLink: "https://github.com/Bolendra2323/Project-4-Url-Shortner.git",
      
    },
    {
      title: "Project 5-E-Commerce",
      img: "https://thumbs.dreamstime.com/b/e-commerce-online-shopping-business-technology-concept-screen-e-commerce-online-shopping-business-technology-concept-screen-207950081.jpg",
      gLink:"https://github.com/Bolendra2323/Project-5-Products-Management.git",
      
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Projects</h3>
          <a
            href="https://github.com/Bolendra2323"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;