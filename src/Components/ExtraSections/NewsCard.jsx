import React from 'react';

const NewsCard = ({ news }) => {
    const { title, date, description, image, url } = news;


    // redirect functions
    const handleRedirect = ()=>{
        window.open(url, "_blank");
    }
    
    return (
        <div>
            <div className="max-w-sm mx-auto bg-textSecondary dark:bg-primary w-full h-[500px] flex flex-col">
                {/* Image */}
                <img
                    src={image}
                    alt="Top 10 Action Movies"
                    className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4 flex flex-col items-center flex-grow">
                    <h2 className="text-2xl font-bold dark:text-textPrimary font-montserrat text-center">
                        {title}
                    </h2>

                    {/* Date */}
                    <div className="text-sm text-gray-500 mb-5">{date}</div>

                    {/* Description */}
                    <p className="text-xl dark:text-textSecondary mt-2 text-center font-roboto line-clamp-3">
                        {description}
                    </p>

                    {/* Button */}
                    <button onClick={handleRedirect} className="mt-auto w-full bg-secondary hover:text-black font-bold hover:bg-accent font-roboto  text-white py-2 px-4 rounded">
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
