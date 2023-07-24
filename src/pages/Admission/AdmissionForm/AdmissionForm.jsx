import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const AdmissionForm = () => {
    const college = useLoaderData();
    const {collegeImage, collegeName, researchHistory, rating, review} = college;
    const {user} = useContext(UserContext);
    const handlerAddAddmission = (event) => {
        event.preventDefault();
        const form = event.target;
        const candidateName = form.candidateName.value;
        const subject = form.subject.value;
        const group = form.group.value;
        const phoneNumber = parseInt(form.phoneNumber.value);
        const email = form.email.value;
        const dateOfBirth = form.dateOfBirth.value;
        const address = form.address.value;
        const photo = form.photo.value;

        const newAdmission = {
            collegeName,
            collegeImage,
            researchHistory,
            rating,
            review,
            candidateName,
            subject,
            group,
            phoneNumber,
            email,
            dateOfBirth,
            address,
            photo,

        }
        console.log(newAdmission);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, added it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch('https://college-services-server.vercel.app/admission', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdmission)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.insertedId){
                  Swal.fire(
                'Added!',
                'Your toys has been added.',
                'success'
              )
              form.reset();
            }
        })
        }
        })   
    }
    return (
        <div className="hero py-24 px-4 md:px-24  bg-base-200 ">
    <div className="card w-11/12 md:w-3/4 mx-auto  shadow-2xl bg-base-100">
      <form onSubmit={handlerAddAddmission}>
      <h2 className="text-2xl md:text-3xl text-success font-bold text-center pt-6">ADMISSION NOW!</h2>
      <div className="card-body ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text">College Name</span>
          </label>
          <input type="text" defaultValue={college.collegeName} name="collegeName" placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Name</span>
          </label>
          <input type="text" name="candidateName" placeholder="Candidate Name" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="text" name="subject" placeholder="Subject" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text"> Group</span>
          </label>
          <input type="text" name="group" placeholder="Group" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Phone number</span>
          </label>
          <input type="text" name="phoneNumber" placeholder="Phone number" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" defaultValue={user?.email} name="email" placeholder="Email" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Date Of Birth</span>
          </label>
          <input type="text" name="dateOfBirth" placeholder="Date Of Birth" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" defaultValue="" name="address" placeholder="Address" className="input input-bordered" />
            </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Photo URL</span>
          </label>
          <input type="text" defaultChecked={user?.photoURL} name="photo" placeholder="Photo URL" className="input input-bordered" />
            </div>

        <div className="form-control mt-6 ">
          <input className="btn bg-success border-none text-white" type="submit" value="Submit" />
        </div>
      </div>
      </form>
    </div>
  </div>
    );
};

export default AdmissionForm;