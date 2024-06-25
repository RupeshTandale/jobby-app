import Header from "../header";
import DisplayJobs from "../displayJobs";
import FilterSection from "../filterSection";
import "./index.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Jobs = () => {
  const [allValues, setValues] = useState({
    jobItems: [],
  });

  const token = Cookies.get("jwtToken");


  useEffect(() => {
    const fetchJobs = async () => {
      const api = "https://apis.ccbp.in/jobs";

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(api, options);

      const fetchData = await response.json();

      if(response.ok === true){
        setValues({ ...allValues, jobItems: fetchData.jobs});
      }

      console.log(fetchData.jobs);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Header />
      <div className="filter-display-all-jobs-cont">
        <div className="filter-section-cont">
          <FilterSection />
        </div>
        <div className="display-all-jobs-cont">
          <ul>
            {allValues.jobItems.map(each => 
              <DisplayJobs jobDetails = {each} key={each.id}/>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
