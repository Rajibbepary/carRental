

const Title = ({title, subTitle}) => {
    return (
        <div>
            <h1 className="font-semibold text-3xl">{title}</h1>
            <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-156">{subTitle}</p>
        </div>
    );
};

export default Title;