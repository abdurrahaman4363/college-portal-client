import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";



const AddFeedback = () => {

  const handlerFeedback = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const rating = parseFloat(form.rating.value);
    const collegeFeedback = form.collegeFeedback.value;

    const newFeedback = {
      name,
      rating,
      collegeFeedback,
    };
    console.log(newFeedback);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, added it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/feedback", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newFeedback),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire("Added!", "Your toys has been added.", "success");
              form.reset();
            }
          });
      }
    });
  };
  return (
    <div>
        <SectionTitle heading={'heading'} subHeading={'feedback'}></SectionTitle>
        <div className="hero p-8 md:p-24  bg-base-200 mb-16">
      <div className="card w-11/12 md:w-3/4  mx-auto  shadow-2xl bg-base-100">
        <form onSubmit={handlerFeedback}>
          <div className="card-body ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Feedback</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Feedback"
                  name="collegeFeedback"
                ></textarea>
              </div>
            </div>
            <div className="form-control mt-6 ">
              <input
                className="btn bg-success border-none text-white"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddFeedback;
