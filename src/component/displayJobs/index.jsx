import "./index.css";
import { FaStar, FaBriefcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

/*
company_logo_url: "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png"

employment_type: "Internship"

id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751"

job_description: "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in 
the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners 
to minimize/avoid any production outages. The role will focus on production support."

location: "Delhi"

package_per_annum: "10 LPA"

rating: 4

title: "Devops Engineer"


*/

const DisplayJobs = (props) => {
  const { jobDetails } = props;

  return (
    <li className="jobs-card">
      <div className="top-section">
        <img
          src={jobDetails.company_logo_url}
          alt="web logo"
          className="web-logo"
        />
        <div>
          <h4>{jobDetails.title}</h4>
          <FaStar className="star-icon" />
          <span>{jobDetails.rating}</span>
        </div>
      </div>
        <div className="loc-empTyp-cont">
          <div>
            <FaLocationDot className="my-icons" />
            <span className="mr-4">{jobDetails.location}</span>
            <FaBriefcase className="my-icons"/>
            <span className="mr-4">{jobDetails.employment_type}</span>
          </div>
          <h5>{jobDetails.package_per_annum}</h5>
        </div>
        <hr className="ruler-line"/>
        <h4>Description</h4>
        <p>{jobDetails.job_description}</p>
    </li>
  );
  <hr />
};

export default DisplayJobs;
