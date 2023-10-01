import React from 'react';
import './workExperience.css'; 
import img1 from "./../../assets/Appsquadz.png";
import img2 from "./../../assets/Techcompiler-logo.png";
import img3 from "./../../assets/dealshare.png";

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h2 className="section__title">Work Experience</h2>    
      <h3 className="section-subtitle">Where I worked previously</h3>
      <div className="company-box">
        <img src={img1} alt="Company 1 Logo" className="company-logo" style={{background: "#037ff7", padding: "3px", borderRadius:"20px"}} />
        <h4 className="company-name" style={{color:"dodgerblue"}}>AppSquadz</h4>
        <p className="position">Full Stack Intern</p>
        <p className='description'>I completed an internship in Java and worked on various projects involving HTML, CSS, JavaScript, and ReactJS.</p>
      </div>
      <div className="company-box">
        <img src={img2} alt="Company 2 Logo" className="company-logo"  style={{background: "lightblue",padding: "3px", borderRadius:"20px"}}/>
        <h4 className="company-name" style={{color: "#00f8e9"}}>TechCompiler</h4>
        <p className="position">Software Engineer</p>
        <p className='description'>I completed an internship as a Software Engineer, using technologies such as JavaScript, Node.js, and React.js.</p>
      </div>
      <div className="company-box">
        <img src={img3} alt="Company 3 Logo" className="company-logo" />
        <h4 className="company-name" style={{color: "#61e800"}}>DealShare</h4>
        <p className="position">Data Analytics / RScript</p>
      </div>
    </div>
  );
}

export default WorkExperience;
