import { IoIosArrowForward } from "react-icons/io";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://movie-portal-server-kappa.vercel.app/featured-movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-error"></span>
            </div>
        )
    }
    return (
        <section className="dark:bg-forDark2 py-28 px-3 xl:px-0 flex flex-col items-center">
            <div className="container mx-auto">
                <div className="mb-10">
                    <h2 className="dark:text-textPrimary  font-bebas text-4xl border-l-4 border-secondary pl-2">Featured Movies</h2>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="hidden">.</h1>
                    {
                        loading ?
                            (
                                <div className="flex flex-col items-center justify-between">
                                    <p className="hidden">.</p>
                                    <span className="h-screen loading loading-spinner text-error"></span>
                                </div>
                            ) :
                            (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 5 gap-10">
                                    {
                                        movies.map(movie => <MovieCard key={movie._id} movie={movie}></MovieCard>)
                                    }
                                </div>
                            )
                    }
                </div>
            </div>
            <Link to='/all-movies'>
                <button className="btn mt-11 border-none bg-secondary text-textPrimary font-montserrat hover:bg-accent hover:text-black flex items-center"><span>View All Movies</span> <IoIosArrowForward />
                </button>
            </Link>
        </section>
    );
};

export default FeaturedMovies;