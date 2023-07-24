const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="w-8/12 md:w-4/12 text-center mx-auto my-6 md:my-8">
            <p className="text-yellow-600 pb-2 italic">--- {subHeading} ---</p>
            <h3 className="text-2xl md:text-3xl uppercase border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;