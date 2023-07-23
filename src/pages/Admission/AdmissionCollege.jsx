const AdmissionCollege = ({ college }) => {
  const { collegeImage, collegeName } = college;
  return (
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
        </div>
      </div>
    </div>
  );
};

export default AdmissionCollege;
