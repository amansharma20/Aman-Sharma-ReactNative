import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
            <Fade bottom cascade>
              <h1>Professional Experience</h1>
              <h2>{data.companyName}</h2>
            </Fade>
            <p className="info">
              {data.designation}
              <span>&bull;</span> <em className="date">{data.duration}</em>
              <p className="info">
                <span>&bull;</span> <em className="date">{data.description}</em> <br />
                <span>&bull;</span> <em className="date">{data.description4}</em> <br />
                <span>&bull;</span> <em className="date">{data.description3}</em> <br />
                <span>&bull;</span> <em className="date">{data.description5}</em> <br />
                <span>&bull;</span> <em className="date">{data.description6}</em> <br />
                <span>&bull;</span> <em className="date">{data.description2}</em> <br />
              </p>
            </p>
            <Fade bottom cascade>
              <h1>Education</h1>
            </Fade>
            <p className="info">
              <h2>{data.college}</h2>
              {data.course}
              <span>&bull;</span> <em className="date">{data.eduDuration}</em>
              <p className="info">
                <span>&bull;</span> <em className="date">{data.eduDescription}</em> <br />
              </p>
            </p>
            <p className="info">
              <h2>{data.school}</h2>
              {data.schoolType}
              <span>&bull;</span> <em className="date">{data.schoolFinishDate}</em>
              <p className="info">
                <span>&bull;</span> <em className="date">{data.schoolDescription}</em> <br />
              </p>
            </p>
            <p className="info">
              <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-grid">
                  {data.skills.map((skill, index) => (
                    <div className="skill" key={index}>
                      <img src={skill.img} alt="css"></img>
                      <h3>{skill.para}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
