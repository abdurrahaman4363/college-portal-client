import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CollegeCard from "./CollegeCard";

const College = () => {
  const [colleges, setCollege] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/college")
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, []);
  return (
      <div className="my-8 md:my-12">
        <SectionTitle
          heading={"our Colleges"}
          subHeading={"Check The Information"}
        ></SectionTitle>
        <div className="text-center pt-4 mb-8">
        <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="College Name"
            />
          </div>
        </div>
        <div className="indicator">
          <span className="indicator-item badge badge-success text-white">Colleges</span>
          <button className="btn join-item">Search</button>
        </div>
      </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {colleges.slice(0, 6).map((college) => (
            <CollegeCard key={college._id} college={college}></CollegeCard>
          ))}
        </div>
      </div>
  );
};

export default College;
