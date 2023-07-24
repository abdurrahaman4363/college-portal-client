import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      className="text-center"
    >
      <div className="">
        <img src="https://i.postimg.cc/BQ2kFbWh/pexels-george-pak-7972541.jpg" />
      </div>
      <div className="">
        <img src="https://i.postimg.cc/cJhdB6fM/pexels-andrea-piacquadio-3755760.jpg" />
      </div>
      <div >
        <img src="https://i.postimg.cc/pXkyP20S/pexels-pixabay-159775.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/fL00b639/pexels-stanley-morales-1454360.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/1RnL9Mv1/pexels-rdne-stock-project-7683704.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
