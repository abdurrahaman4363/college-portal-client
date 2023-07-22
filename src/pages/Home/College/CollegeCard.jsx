const CollegeCard = ({ college }) => {
  const { collegeName, collegeImage } = college;
  return (
    <div className="card w-86 bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[300px] w-full"
          src={collegeImage}
          alt="collegeimg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{collegeName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
