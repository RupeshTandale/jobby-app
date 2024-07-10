import Header from "../header";
import DisplayJobs from "../displayJobs";
import FilterSection from "../filterSection";
import "./index.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Jobs = () => {
  const [allValues, setValues] = useState({
    jobItems: [],
    empType: [],
    salRange: "",
    userSearch: "",
  });

  const token = Cookies.get("jwtToken");

  useEffect(() => {
    const fetchJobs = async () => {
      const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.salRange}&search=${allValues.userSearch}`;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(api, options);

      const fetchData = await response.json();

      console.log(fetchData);

      if (response.ok === true) {
        setValues({ ...allValues, jobItems: fetchData.jobs });
      }

      console.log(fetchData.jobs);
    };

    fetchJobs();
  }, [allValues.userSearch, allValues.empType,allValues.salRange]);


  const onChangeUserInp = (e) => {
    if (e.key === "Enter") {
      setValues({ ...allValues, userSearch: e.target.value });
    }
  };

  const retriveEmpType = (values, isChecked) => {
    if (isChecked === true) {
      setValues({ ...allValues, empType: [...allValues.empType, values] });
    } else {
      setValues({
        ...allValues,
        empType: allValues.empType.filter((each) => each !== values),
      });
    }
  };

  const retriveSalRange = (values) =>{
    setValues({...allValues, salRange:values});
  }

  return (
    <div>
      <Header />
      <div className="filter-display-all-jobs-cont">
        <div className="filter-section-cont">
          <FilterSection empTypeFunct={retriveEmpType} salRangeFunct = {retriveSalRange} />
        </div>
        <div className="display-all-jobs-cont">
          <input
            type="search"
            className="form-control my-input"
            onKeyDown={onChangeUserInp}
          />
          <ul className="jobs-list-cont">
            {allValues.jobItems.map((each) => (
              <DisplayJobs jobDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
