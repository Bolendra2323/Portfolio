import React, { useState } from 'react'

function Experiences() {
    const [services]=useState([
        {
          icon:"fa-paintbrush",
          titile:"Production Supervisor",
          desc:"Production Supervisor in SJK Engineering",
          active :false,
        },

        {
          icon:"fa-pen-to-square",
          titile:"Backend-Developer-Trainee",
          desc:"Backend Developer Trainee in FunctionUP",
          active:true,
        }
    ])
  return (
    <section className='services-experience'>
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
             
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
          </div>
          <div className="experiences" id="experiences">
          <div className="experience">
            <h3>4</h3>
            <p>Months Experience</p>
          </div>
          <div className="portfolio">
              <h4>1</h4>
              <p>Year Experience</p>
            </div>
        
        </div>
        </div>
    </section>
  )
}

export default Experiences
