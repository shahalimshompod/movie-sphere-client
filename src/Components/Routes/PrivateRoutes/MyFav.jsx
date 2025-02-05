import { useContext, useEffect, useState } from "react";
import MovieCard from "../../MovieCard/MovieCard";
import { AuthContext } from "../../AuthContext/AuthContextProvider";
import { useOutletContext } from "react-router-dom";

const MyFav = () => {
    const { darkMode } = useOutletContext();
    const [movies, setMovies] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (email) {

            // Fetching data and passing the email as query parameter
            fetch(`https://movie-portal-server-kappa.vercel.app/my-favorite-movies?email=${encodeURIComponent(email)}`)
                .then((res) => res.json())
                .then((data) => {
                    // Directly using the data from the API, no need for filtering
                    setMovies(data);
                    setLoading(false)
                })
                .catch((error) => {
                    console.error("Error fetching movies:", error);
                });
        }
    }, [email]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-error"></span>
            </div>
        )
    }

    return (
        <div className="dark:bg-forDark2 pb-28 pt-12 px-3 xl:px-0">
            <div className="container mx-auto ">
                <div>
                    <h1 className="font-bebas text-5xl border-l-4 pl-3 border-secondary dark:text-textPrimary mb-16">Your Favorites</h1>
                </div>
                <div className="flex flex-col items-center">
                    <p className="hidden">.</p>
                    {
                        movies.length === 0 ? (
                            <div className="flex flex-col items-center justify-center lg:my-32 ">
                                <h1 className="dark:text-textPrimary font-montserrat text-xl lg:text-5xl flex flex-col items-center justify-center text-center lg:w-2/3 mx-auto">NO MOVIES ADDED TO FAVORITE</h1>
                                {
                                    darkMode ? (<img className="w-24 lg:w-44" src="https://i.ibb.co.com/Qk4Lw4w/reel.png" alt="reel" />) : (<img className="w-24 lg:w-44" src="https://i.ibb.co.com/92Jfvs5/reel-1.png" alt="reel" />)
                                }
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {movies.map((movie) => (
                                    <MovieCard key={movie._id} movie={movie} setMovies={setMovies} movies={movies}></MovieCard>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyFav;
