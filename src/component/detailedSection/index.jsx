import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";
import { useEffect, useState } from "react";
import Header from "../header";
import SkillSection from "./skillsSection";
import { FaStar, FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const DetailedSection = () => {
  const { id } = useParams();
  const token = Cookies.get("jwtToken");
  const [allValues, setValues] = useState({
    cardDetails: {
      skills: [],
      life_at_company: {},
    },
    similarJobs: [],
  });

  useEffect(() => {
    const fetchDetailsData = async () => {
      const api = `https://apis.ccbp.in/jobs/${id}`;

      const options = {
        method: "Get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(api, options);

      console.log(response);

      const data = await response.json();

      console.log(data);

      if (response.ok === true) {
        setValues({ ...allValues, cardDetails: data.job_details });
      }
    };

    fetchDetailsData();
  }, []);

  console.log("data : " + allValues.cardDetails);

  return (
    <div className="main-cont">
      <Header />
      <div className="details-container">
        <div className="cards-details">
          <div className="top-section">
            <img
              src={allValues.cardDetails.company_logo_url}
              alt=""
              className="image"
            />
            <div>
              <h1 className="job-title">{allValues.cardDetails.title}</h1>
              <FaStar className="star-icon" />
              <span>{allValues.cardDetails.rating}</span>
            </div>
          </div>
          <div className="loc-empTyp-cont">
            <div>
              <FaLocationDot className="icon" />
              <span className="mr-4">{allValues.cardDetails.location}</span>
              <FaBriefcase className="icon" />
              <span className="mr-4">
                {allValues.cardDetails.employment_type}
              </span>
            </div>
            <div>
              <h3>{allValues.cardDetails.package_per_annum}</h3>
            </div>
          </div>
          <hr className="ruler-section" />
          <div className="description-section">
            <div>
              <h3>Description</h3>
            </div>
            <div>
              <a
                href={allValues.cardDetails.company_website_url}
                className="visit-link"
                target="_blank"
              >
                <span className="visit">visit</span>
                <FaExternalLinkAlt className="visit-icon" />
              </a>
            </div>
          </div>
          <div className="description-details">
            <p className="job-details">
              {allValues.cardDetails.job_description}
            </p>
          </div>
          <div className="required-skills">
            <h3>Skills</h3>
            {/* {allValues.cardDetails.skills && ( */}
            <ul className="skill-section">
              {allValues.cardDetails.skills.map((each) => (
                <SkillSection skillDetails={each} key={each.name} />
              ))}
            </ul>
            {/* )} */}
            <hr className="ruler-section" />
            <h3>Life at Company</h3>
            <div className="company-background">
              <div className="life-at-work">
                <p className="cmp-desc">
                  {allValues.cardDetails.life_at_company.description}
                </p>
              </div>
              <div className="cmp-img">
                <img
                  src={allValues.cardDetails.life_at_company.image_url}
                  className="company-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedSection;
