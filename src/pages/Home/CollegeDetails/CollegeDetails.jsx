import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";


const CollegeDetails = () => {
    const collegeDeatails = useLoaderData();
    const {collegeImage, collegeName, rating, admissionProcess, sports, researchWorks, eventsDetails} = collegeDeatails;
    return (
        <div className="py-24">
            <div className="card w-11/12 md:w-1/2 mx-auto bg-base-100 shadow-xl">
      <figure className="px-2 md:px-10 pt-10">
        <img
          src={collegeImage}
          style={{ height: "400px", width: '100%' }}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
      <h2 className="card-title">{collegeName}</h2>
      <p><span className="font-bold">Admission Process:</span> {admissionProcess}</p>
      <p><span className="font-bold">Events Details:</span> {eventsDetails}</p>
      <p><span><span className="font-bold">Research Works:</span> {researchWorks.Project1}</span></p>
      <p><span><span className="font-bold">Sports Category:</span> {sports[0]}, {sports[1]}, {sports[2]}, {sports[3]}</span></p>
        <div className="card-actions">
          {/* <button className="btn btn-primary">Buy Now</button> */}
          <p className="flex mt-4 justify-center items-center">
          <Rating
            style={{ maxWidth: 150 }}
            value={rating}
            readOnly
        /> 
        <span className="pl-2 font-bold"> {rating}</span>
          </p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default CollegeDetails;