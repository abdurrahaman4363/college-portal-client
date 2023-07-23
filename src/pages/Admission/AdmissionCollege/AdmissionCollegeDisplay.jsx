import { Link } from "react-router-dom";

const AdmissionCollegeDisplay = ({ college }) => {
  const { collegeImage, collegeName, _id} = college;
  return (
    
        <Link to={`/admissionform/${_id}`}>
          <div className="card w-86 bg-base-100 shadow-xl image-full cursor-pointer">
      <figure>
        <img
          style={{width: '100%', height: '250px'}}
          src={collegeImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center my-auto">
        <h2 className="card-title">{collegeName}</h2>
        <div className="card-actions justify-end">
          {/* <Link to={`/admissionform/${_id}`}><button className="btn btn-success">details</button></Link> */}
        </div>
      </div>
    </div>
        </Link>
  );
};

export default AdmissionCollegeDisplay;