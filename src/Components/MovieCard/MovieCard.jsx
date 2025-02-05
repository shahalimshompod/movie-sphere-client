import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import Swal from 'sweetalert2';


const MovieCard = ({ movie, movies, setMovies }) => {
    const location = useLocation();
    const { _id, title, duration, poster, genre, releaseYear, rating } = movie;

    const handleDeleteFavoriteMovie = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://movie-portal-server-kappa.vercel.app/my-favorite-movies/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const restFavoriteMovies = movies.filter(favoriteMovie => favoriteMovie._id !== id);
                            setMovies(restFavoriteMovies);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="relative w-64 h-96 bg-gray-900 overflow-hidden group shadow-lg">
                {/* Movie Poster */}
                <img
                    src={poster}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-50 transition-opacity duration-300"
                />

                {/* Card Background Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Movie Details */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                    {/* Top Section (Genre and Rating) */}
                    <div className="opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mb-10">
                        <div className="flex flex-col justify-between items-center">
                            <span className="text-sm">{genre}</span>
                            <span className="text-sm text-yellow-400 flex items-center gap-1"><span><FaStar />
                            </span>{rating}/5</span>
                        </div>
                    </div>

                    {/* Center Section (see details btn) */}
                    <div className="flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {location.pathname === "/book-tickets" ? (
                            // Show "Book Tickets" button on the "/book-tickets" route
                            <Link to="https://www.cineplexbd.com/">
                                <button className="text-white py-2 px-4 rounded-lg shadow-lg bg-secondary hover:bg-accent focus:outline-none font-montserrat font-bold hover:text-black">
                                    Book Tickets
                                </button>
                            </Link>
                        ) : location.pathname === "/my-favorite-movies" ? (
                            null
                        ) : (
                            // Show "See Details" button on all other routes
                            <Link to={`/movie-details/${_id}`}>
                                <button className="text-white py-2 px-4 rounded-lg shadow-lg bg-secondary hover:bg-accent focus:outline-none font-montserrat font-bold hover:text-black">
                                    See Details
                                </button>
                            </Link>
                        )}
                    </div>

                    {/* Bottom Section (Title and Release Date) */}

                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col items-center">
                        <h2 className="text-2xl translate-y-4 group-hover:translate-y-0 font-montserrat font-bold  transition-all duration-500 mb-1 text-center">{title}</h2>
                        <p className='text-sm font-roboto'>{duration} MIN</p>
                        <p className="text-base font-bebas text-gray-300 mb-1"><span>Release Year: </span>{releaseYear}</p>
                    </div>
                </div>
            </div>
            <div>
                {
                    location.pathname === '/my-favorite-movies' && (<button onClick={() => handleDeleteFavoriteMovie(_id)} className="btn btn-sm w-full rounded-t-none bg-red-500 border-none text-textPrimary font-montserrat font-bold hover:bg-red-700">Delete Favorite</button>)
                }
            </div>

        </div>
    );
};

export default MovieCard;