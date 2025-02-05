import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const ExtraFirstSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalTwoOpen, setIsModalTwoOpen] = useState(false)
    const [isModalThreeOpen, setIsModalThreeOpen] = useState(false)
    const Upcoming = [
        {
            title: "Squid Game Season 2",
            releaseDate: "December 2024",
            image: "https://i.ibb.co.com/Q89Zn2T/hq720.jpg"
        },
        {
            title: "Mission: Impossible - The Final Reckoning",
            releaseDate: "May 23, 2025",
            image: "https://i.ibb.co.com/Gx1cgKX/maxresdefault-2.jpg"
        },
        {
            title: "Stranger Things Season 5",
            releaseDate: "Summer 2025",
            image: "https://i.ibb.co.com/1QMXK1C/maxresdefault-1.jpg"
        }
    ];
    return (

        <section className="py-28 bg-textSecondary dark:bg-forDark px-3 xl:px-0">
            <div className="container mx-auto ">
                <div className="mb-10">
                    <h2 className="text-primary dark:text-textPrimary font-bebas text-2xl lg:text-4xl border-l-4 border-secondary pl-2">Upcoming Movies & TV series</h2>
                </div>
                <div className="w-full 2xl:mx-44">
                    <div className="grid xl:grid-cols-4 gap-4">


                        {/* Left Column */}
                        <div className="xl:col-span-2 relative group">
                            <img
                                src="https://i.ibb.co/Gx1cgKX/maxresdefault-2.jpg"
                                alt="Scenic View"
                                className="w-full h-full object-cover"
                            />

                            {/* card background overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* info section */}
                            <div className="absolute inset-0 top-10 md:top-44 lg:top-64 xl:top-40 2xl:top-48 ">

                                {/* play button */}
                                <div className="flex justify-center items-center md:mb-24 lg:mb-32 xl:mb-16 2xl:mb-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link onClick={() => setIsOpen(true)}>
                                        <div className="flex flex-col items-center">
                                            <button className=" btn btn-circle bg-accent/20 border-2 border-accent hover:bg-accent hover:border-accent">
                                                <FaPlay />
                                            </button>
                                            <p className="text-white font-bebas">Watch Trailer</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className=" opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col items-center">
                                    <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-2xl translate-y-4 group-hover:translate-y-0 font-montserrat font-bold  transition-all duration-500  xl:mb-1 text-white text-center">Mission: Impossible - The Final Reckoning</h2>
                                    <p className="text-base text-gray-300 lg:mb-1"><span className="font-roboto">Release Date:</span> <span className="font-bebas text-base lg:text-xl">May 23, 2025</span></p>
                                </div>
                            </div>
                        </div>
                        {/* left column modal */}
                        {/* Modal */}
                        {isOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="rounded-lg  w-full max-w-3xl p-6 relative">
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="absolute top-2 right-2 text-white bg-secondary rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
                                    >
                                        &times;
                                    </button>

                                    {/* Video Player */}
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/NOhDyUmT9z0?si=TtAJN6odl2BB8-gW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        )}








                        {/* Right Column */}
                        <div className="grid gap-4">
                            {/* squid game */}
                            <div className=" relative group">
                                <img
                                    src="https://i.ibb.co.com/Q89Zn2T/hq720.jpg"
                                    alt="Scenic View"
                                    className="w-full h-full object-cover"
                                />

                                {/* card background overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* info section */}
                                <div className="absolute inset-0 top-10 md:top-44 lg:top-64 xl:top-8 2xl:top-16">

                                    {/* play button */}
                                    <div className="flex justify-center items-center mb-3 md:mb-10 lg:mb-32 xl:mb-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Link onClick={() => setIsModalTwoOpen(true)}>
                                            <div className="flex flex-col items-center">
                                                <button className=" btn btn-circle bg-accent/20 border-2 border-accent hover:bg-accent hover:border-accent">
                                                    <FaPlay />
                                                </button>
                                                <p className="text-white font-bebas">Watch Trailer</p>
                                            </div>

                                        </Link>
                                    </div>

                                    <div className=" opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col items-center">
                                        <h2 className="text-lg translate-y-4 group-hover:translate-y-0 font-montserrat font-bold  transition-all duration-500 mb-1 text-white md:text-3xl lg:text-4xl xl:text-xl">Squid Game Season 2</h2>
                                        <p className="text-base text-white"><span className="font-roboto">Release Date:</span> <span className="font-bebas text-base lg:text-xl xl:text-base">December 2024</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* Modal */}
                            {isModalTwoOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                    <div className="rounded-lg  w-full max-w-3xl p-6 relative">
                                        {/* Close Button */}
                                        <button
                                            onClick={() => setIsModalTwoOpen(false)}
                                            className="absolute top-2 right-2 text-white bg-secondary rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
                                        >
                                            &times;
                                        </button>

                                        {/* Video Player */}
                                        <div className="aspect-w-16 aspect-h-9">
                                            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/Ed1sGgHUo88?si=BGdWsP0wFMpHUiP3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            )}








                            {/* stranger things */}
                            <div className="relative group">
                                <img
                                    src="https://i.ibb.co.com/1QMXK1C/maxresdefault-1.jpg"
                                    alt="Scenic View"
                                    className="w-full h-full object-cover"
                                />

                                {/* card background overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* info section */}
                                <div className="absolute inset-0 top-10 md:top-44 lg:top-64 xl:top-8 2xl:top-16">

                                    {/* play button */}
                                    <div className="flex justify-center items-center mb-2 lg:mb-28 xl:mb-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Link onClick={() => setIsModalThreeOpen(true)}>
                                            <div className="flex flex-col items-center">
                                                <button className=" btn btn-circle bg-accent/20 border-2 border-accent hover:bg-accent hover:border-accent">
                                                    <FaPlay />
                                                </button>
                                                <p className="text-white font-bebas">Watch Trailer</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className=" opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col items-center">
                                        <h2 className="text-lg translate-y-4 group-hover:translate-y-0 font-montserrat font-bold  transition-all duration-500 mb-1 text-white text-center md:text-3xl lg:text-4xl xl:text-xl">Stranger Things Season 5</h2>
                                        <p className="text-base text-gray-300 mb-1"><span className="font-roboto text-white">Release Date:</span> <span className="font-bebas text-base lg:text-xl xl:text-base">Summer 2025</span></p>
                                    </div>
                                </div>
                            </div>
                            {isModalThreeOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                    <div className="rounded-lg  w-full max-w-3xl p-6 relative">
                                        {/* Close Button */}
                                        <button
                                            onClick={() => setIsModalThreeOpen(false)}
                                            className="absolute top-2 right-2 text-white bg-secondary rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
                                        >
                                            &times;
                                        </button>

                                        {/* Video Player */}
                                        <div className="aspect-w-16 aspect-h-9">
                                            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/h-2LIjOt0rA?si=vY3fbHJ0Kr4gUVi9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* info section */}

                </div>

            </div>
        </section>

    );
};

export default ExtraFirstSection;