import { Rating } from "@smastrom/react-rating";


const AllCollegeDisplay = ({ college }) => {
  const { collegeImage, collegeName, admissionDates, rating, researchPaperLinks } = college;
  return (
        
        <div className="card w-86 bg-base-100 shadow-xl">
      <figure>
        <img
         className="h-[300px] w-full"
          src={collegeImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{collegeName}</h2>
        <p><span className="font-bold">Admission Dates: </span>{admissionDates}</p>
        <p><span className="font-bold">Research Project Number: </span>{researchPaperLinks.length}</p>
        <p className="flex justify-start items-center">
          <Rating
            style={{ maxWidth: 120 }}
            value={rating}
            readOnly
        /> 
        <span className="pl-2 font-bold"> {rating}</span>
          </p>
        <div className="card-actions justify-end">
        
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default AllCollegeDisplay;
