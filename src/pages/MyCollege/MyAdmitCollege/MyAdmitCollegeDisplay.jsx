import { Rating } from "@smastrom/react-rating";


const MyAdmitCollegeDisplay = ({myCollege}) => {
    const {collegeName, collegeImage, rating, address, candidateName, } = myCollege;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className="w-[200px] h-[230px]" src={collegeImage} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title mb-0 pb-0 ">{collegeName}</h2>
          <p><span className="font-medium mb-0 pb-0 ">Address: </span>{address}</p>
          <p><span className="font-medium mb-0 pb-0 ">Candidate Name: </span>{candidateName}</p>
          <p className="flex mt-4 justify-start items-center mb-0 pb-0">
          <Rating
            style={{ maxWidth: 110 }}
            value={rating}
            readOnly
        /> 
        <span className="pl-2 font-bold"> {rating}</span>
          </p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    );
};

export default MyAdmitCollegeDisplay;