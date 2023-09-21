


const HeadTitle = ({subTitle,Title}) => {
    return (
        <div className="inline-block">
            <p className="bg-[#E6EEFF] inline-block font-semibold px-4 py-2 rounded-full text-[#0055FF]">{subTitle}</p>
            <h2 className="py-3 lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold leading-snug">{Title}</h2>
        </div>
    );
};

export default HeadTitle;