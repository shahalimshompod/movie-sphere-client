import React, { useEffect, useState } from "react";
import MovieCard from "../../MovieCard/MovieCard";
import { CiSearch } from "react-icons/ci";
import { useOutletContext } from "react-router-dom";

const AllMovies = () => {
    const { darkMode } = useOutletContext();
    const [moviesData, setMoviesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch movies data using useEffect
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://movie-portal-server-kappa.vercel.app/all-movies");
                const data = await response.json();
                setMoviesData(data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    // Filtered movies based on search term
    const filteredMovies = moviesData.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Render loading spinner if data is being fetched
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-error"></span>
            </div>
        );
    }

    return (
        <div className="dark:bg-forDark2 pb-28 pt-12 px-3 xl:px-0">
            <div className="container mx-auto">

                {/* Heading */}
                <div className=" mb-6 lg:mb-24 border-l-4 pl-3 border-secondary">
                    <div className="lg:flex items-center lg:justify-between">
                        <div>
                            <h1 className="font-bebas text-5xl dark:text-textPrimary ">All Movies</h1>
                        </div>

                        <div className="mb-1  w-full lg:w-1/4">
                            <form className="flex gap-4 items-center border-none outline-none">
                                <div className="relative w-full">
                                    <CiSearch size={25} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search movies..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                                        className="border p-2 pl-10 rounded-lg w-full"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSearchTerm("")} // Reset search term
                                    className="btn bg-secondary text-white border-none rounded-lg px-5"
                                >
                                    Clear
                                </button>
                            </form>
                        </div>

                    </div>
                    {
                        searchTerm ? (<p className="text-xl text-textPrimary font-montserrat">Result for : <span className="text-2xl">{searchTerm}</span></p>) : ""
                    }
                </div>

                {/* Search Form */}



                <div className="flex flex-col items-center">
                    {filteredMovies.length !== 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredMovies.map((movie) => (
                                <MovieCard key={movie._id} movie={movie}></MovieCard>
                            ))}
                        </div>
                    ) : (
                        searchTerm === '' ? (
                            <div className="flex flex-col items-center justify-center lg:my-32 ">
                                <h1 className="dark:text-textPrimary font-montserrat text-xl lg:text-5xl flex flex-col items-center justify-center text-center lg:w-2/3 mx-auto">SORRY, THERE IS NO MOVIES TO SHOW!!!</h1>
                                {
                                    darkMode ? (<img className="w-24 lg:w-44" src="https://i.ibb.co.com/Qk4Lw4w/reel.png" alt="reel" />) : (<img className="w-24 lg:w-44" src="https://i.ibb.co.com/92Jfvs5/reel-1.png" alt="reel" />)
                                }
                            </div>)
                            :
                            (<div className="flex flex-col items-center justify-center lg:my-32 ">
                                <h1 className="dark:text-textPrimary font-montserrat text-xl lg:text-5xl flex flex-col items-center justify-center text-center lg:w-2/3 mx-auto">SORRY, NO MOVIES MATCH YOUR SEARCH.</h1>
                                {
                                    darkMode ? (<img className="w-24 lg:w-44" src="https://i.ibb.co.com/Qk4Lw4w/reel.png" alt="reel" />) : (<img className="w-24 lg:w-44" src="https://i.ibb.co.com/92Jfvs5/reel-1.png" alt="reel" />)
                                }
                            </div>)
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllMovies;
