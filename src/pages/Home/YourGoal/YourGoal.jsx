import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const YourGoal = () => {
    return (
        <div className="py-8 md:py-12 text-center" >
             <SectionTitle
          subHeading={"For Your Success"}
          heading={"CHAMPIONING YOUR GOALS"}
        ></SectionTitle>

            <div className="flex gap-y-16 flex-col  md:flex-row items-center justify-center md:space-x-8 p-8">
                {/* Card 1 */}
                <div className="custom-card p-5 rounded-lg relative h-60 bg-[#052545]">
                    <img className="mx-auto border w-28 h-16 rounded-full absolute -top-8 left-1/2 -translate-x-1/2" src="https://i.ibb.co/8ddnwJW/join1.webp" alt="Card 1" />
                    <p className="mt-4 py-5 text-left font-serif  text-white text-sm md:text-base">Join our platform and let your products shine in the spotlight. With our tailored advertising solutions, you&rsquo;ll reach a diverse audience, driving engagement and sales. Your success story starts here.</p>
                </div>



                {/* Card 2 */}
                <div className="custom-card p-5 rounded-lg  relative h-60  bg-[#052545]">
                    <img className="mx-auto w-28 h-16 rounded-full absolute -top-8 left-1/2  -translate-x-1/2" src="https://i.ibb.co/mtYqFf3/join2.webp" alt="Card 1" />
                    <p className="mt-4  text-left font-serif text-white text-sm md:text-base "> Elevate your business with precision-targeted advertising that leaves a lasting impact. Our platform offers a dynamic stage for your products, connecting you with eager consumers. Seize the opportunity to captivate hearts and minds</p>
                </div>

                {/* Card 3 */}
                <div className="custom-card p-5 rounded-lg relative h-60  bg-[#052545] ">
                    <img className="mx-auto w-28 h-16 rounded-full absolute -top-8 left-1/2  -translate-x-1/2" src="https://i.ibb.co/5jbrLX4/join3.webp" alt="Card 1" />
                    <p className="mt-4 text-left font-serif  text-xs md:text-base text-white">Step into a world of advertising innovation that fosters growth. Our platform transforms your products into captivating stories, weaving connections with potential buyers. Ignite curiosity and turn it into a loyal customer base</p>
                </div>
            </div>
            <Link to='/admission'><div className='text-center pt-4 md:pt-8'>
                <button className="btn btn-success rounded-full text-white font-serif font-semibold ">
                    Start your business
                </button>
            </div></Link>
        </div>
    );
};

export default YourGoal;