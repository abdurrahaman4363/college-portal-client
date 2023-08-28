
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 px-4 md:px-16 py-12 md:py-24">
      <div className="space-y-6 md:space-y-8">
        <p className="text-lg uppercase font-semibold">OUR CONTACT</p>
        <h3 className="text-5xl font-bold">Get In Touch</h3>
        <p className='font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          viverra lorem sed eros mattis dignissim.
        </p>
        <div className="flex gap-4 ">
          <button className="btn btn-success rounded-full lowercase text-white">
            <FaMailBulk></FaMailBulk>Sakib75@gmail.com
          </button>
          <button className="btn btn-success rounded-full text-white">
            <FaPhone></FaPhone>(+880) 1834345450
          </button>
        </div>
        <p className='font-semibold'>Follow Us:</p>
        <div className="flex gap-4 cursor-pointer">
          <FaFacebook size={30}></FaFacebook>
          <FaTwitter size={30}></FaTwitter>
          <FaYoutube size={30}></FaYoutube>
          <FaLinkedin size={30}></FaLinkedin>
        </div>
      </div>
      <form className="bg-[#052545] py-16 px-12 rounded-lg space-y-4">
        <div className="flex gap-6 md:gap-8">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white font-bold">Your First Name*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white font-bold">Your Last Name*</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white font-bold">Your Email*</span>
          </label>
          <input
            type="email"
            placeholder="Example@gamil.com"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Your Message*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Message"
          ></textarea>
          <input
            className="mt-10 btn btn-success text-white rounded-full"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </section>
    );
};

export default Contact;