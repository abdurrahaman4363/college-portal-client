import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const { collegeName, collegeImage, _id, admissionDates, researchHistory, events, sports } = college;
  return (
    <div className="card w-86 bg-base-100 shadow-xl px-4 md:px-0">
      <figure>
        <img
          className="h-[300px] w-full"
          src={collegeImage}
          alt="collegeimg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{collegeName}</h2>
        <p><span className="font-bold">Admission Dates: </span>{admissionDates}</p>
        <p><span className="font-bold">Research History: </span>{researchHistory}</p>
        <p><span><span className="font-bold">Events:</span> {events[0]}, {events[1]}, {events[2]}, {events[3]}</span></p>
        <p><span><span className="font-bold">Sports:</span> {sports[0]}, {sports[1]}, {sports[2]}, {sports[3]}</span></p>
        <div className="card-actions justify-end">
          <Link to={`/collegedetails/${_id}`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
