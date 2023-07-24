
import AllCollege from "../AllCollege/AllCollege";


const College = () => {
    return (
        <div>
            <div className="w-8/12 md:w-4/12 text-center mx-auto pt-28 pb-12">
             <p className="text-yellow-600 pb-2 italic">--- Don not Miss This Admission ---</p>
             <h3 className="text-3xl uppercase border-y-4 py-3">All Colleges</h3>
            </div>
            <AllCollege></AllCollege>
        </div>
    );
};

export default College;