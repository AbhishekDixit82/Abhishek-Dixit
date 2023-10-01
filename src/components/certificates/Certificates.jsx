import React, { useEffect, useState } from "react";
import "./certificates.css";
import CSS from "../../assets/css.jpg";
import Internship from "../../assets/intrnship.jpg";
import CID from "../../assets/CID internship.jpg";
import C from "../../assets/C programming.jpg";
import Html5 from "../../assets/html5.jpg";
import WebD from "../../assets/htmlcssjs.jpg";
import Java from "../../assets/java.jpg";
import JavaScript from "../../assets/javascript.jpg";
import ReactC from "../../assets/react.jpg";
import "./certificates.css"; // Import your CSS file

const Certificates = () => {
  const certificatesData = [
    {
      imgSrc: Internship,
      title: "Full Stack Intern",
      organization: "AppSquadz Soft.Pvt.Ltd",
      date: "June 2022 - Dec 2022",
    },
    {
      imgSrc: CID,
      title: "CID Crime Branch",
      organization: "Crime Branch Jaipur | Rajasthan",
      date: "Jan 2023 - Feb 2023",
    },
    {
      imgSrc: C,
      title: "C/C++ programming",
      organization: "Samyak Computer Classes",
      date: "March 2022",
    },
    {
      imgSrc: Java,
      title: "Core Java",
      organization: "HackerRank",
      date: "April 2023",
    },
    {
      imgSrc: Html5,
      title: "Introduction to HTML5",
      organization: "Coursera",
      date: "Sep 2021",
    },
    {
      imgSrc: WebD,
      title: "HTML, CSS & JavaScript",
      organization: "Coursera",
      date: "Feb 2022",
    },
    {
      imgSrc: CSS,
      title: "CSS",
      organization: "HackerRank",
      date: "April 2023",
    },
    {
      imgSrc: JavaScript,
      title: "JavaScript Basic",
      organization: "HackerRank",
      date: "April 2023",
    },
    {
      imgSrc: ReactC,
      title: "React Basic",
      organization: "HackerRank",
      date: "April 2023",
    },
  ];

  const itemsPerPage = 3; // Number of certificates to display at a time
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % (certificatesData.length / itemsPerPage));
    }, 5000); // Change certificates every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="certificates-section" id="certificates">
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle">My Certificates</span>
      <div className="certificates-container">
        {certificatesData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((certificate, index) => (
          <div className="certificate" key={index}>
            <img src={certificate.imgSrc} alt="Certificate" />
            <h3>{certificate.title}</h3>
            <p>{certificate.organization}</p>
            <p>{certificate.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
