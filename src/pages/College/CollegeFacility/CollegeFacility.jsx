import { useLoaderData } from "react-router-dom";


const CollegeFacility = () => {
    const collegefacility = useLoaderData();
    const {collegeImage, events, collegeName, sports, eventsDetails} = collegefacility;
    return (
        <div className="py-24">
            <div className="card w-11/12 md:w-1/2 mx-auto bg-base-100 shadow-xl">
      <figure className="md:px-10 pt-10">
        <img
          src={collegeImage}
          style={{ height: "400px", width: '100%' }}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
      <h2 className="card-title text-center text-success">{collegeName}</h2>
      <p className="card-title text-center text-lg">Sports And Events Facility: </p>
      <p><span className="font-bold">Events Details:</span> {eventsDetails}</p>
      <p><span><span className="font-bold">Events:</span> {events[0]}, {events[1]}, {events[2]}, {events[3]}</span></p>
      <p><span><span className="font-bold">Sports:</span> {sports[0]}, {sports[1]}, {sports[2]}, {sports[3]}</span></p>
        <div className="card-actions">
          
        </div>
      </div>
    </div>
        </div>
    );
};

export default CollegeFacility;