import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Feedback = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch("https://college-services-server.vercel.app/feedback")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    return (
      <section>
        <SectionTitle
          subHeading={"what our user say"}
          heading={"Feedback"}
        ></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center flex flex-col justify-center items-center mx-24 my-16 space-y-3">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <p>{review.collegeFeedback}</p>
                <h3 className="text-3xl text-yellow-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };

export default Feedback;