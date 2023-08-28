import Banner from "../Banner/Banner";
import College from "../College/College";
import CollegeGallery from "../CollegeGallery/CollegeGallery";
import Contact from "../Contact/Contact";
import Feedback from "../Feedback/Feedback";
import YourGoal from "../YourGoal/YourGoal";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <College></College>
            <YourGoal></YourGoal>
            <CollegeGallery></CollegeGallery>
            <Contact></Contact>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;