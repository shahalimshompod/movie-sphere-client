import React, { useContext } from 'react';
import { FaStar } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import { DeleteContext } from './ContextForDeleteMovie';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthContext/AuthContextProvider';

const MovieDetailsPage = () => {
    const { moviesData, setMoviesData } = useContext(DeleteContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const movie = useLoaderData();

    // logged in user email
    const userEmail = user?.email;
    const { _id, poster, title, duration, releaseYear, genre, rating, summary } = movie;

    const favoriteMovieDataWithOutId = {
        title,
        genre,
        releaseYear,
        duration,
        rating,
        userEmail,
        summary,
        poster,
    };

    // Handle delete a movie
    const handleDeleteMovie = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://movie-portal-server-kappa.vercel.app/movie-details/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((result) => {
                        const deletedCount = result.deletedCount;
                        if (deletedCount > 0) {
                            const restMovies = moviesData.filter((restMovie) => id !== restMovie._id);
                            setMoviesData([...restMovies]);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Movie has been deleted.",
                                icon: "success",
                            }).then(() => {
                                navigate("/all-movies");
                                // alert
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: "top-end",
                                    showConfirmButton: false,
                                    timer: 2000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                        toast.onmouseenter = Swal.stopTimer;
                                        toast.onmouseleave = Swal.resumeTimer;
                                    }
                                });
                                Toast.fire({
                                    icon: "success",
                                    title: "Movie deleted successfully"
                                }).then(() => { });
                            });
                        }
                    });
            }
        });
    };

    // Handle add to favorite
    const handleAddToFavorite = () => {
        const favoriteMovieDataWithOutId = {
            title,
            genre,
            releaseYear,
            duration,
            rating,
            userEmail,
            summary,
            poster,
        };

        // Send the POST request to add the movie to the favorite list
        fetch('https://movie-portal-server-kappa.vercel.app/my-favorite-movies', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(favoriteMovieDataWithOutId),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Added to Favorites',
                        text: 'The movie has been added to your favorites.',
                    });
                    return;
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops',
                        text: 'The movie is already in your favorites.',
                    });
                }
            })
    };

    // handle send update movie data
    const handleSendUpdateMovieData = () => {
        navigate('/update-movie', { state: rating })
        navigate('/update-movie', { state: movie })
    }

    return (
        <section className='dark:bg-forDark2 py-10 xl:py-20 px-3 xl:px-0 flex flex-col items-center'>
            <div className='container mx-auto'>
                <div className='border-l-4 pl-3 border-secondary flex items-center mb-10 justify-between'>
                    <h1 className="font-bebas text-2xl md:text-5xl dark:text-textPrimary">Movie Details</h1>
                    <NavLink to='/all-movies' className='btn mr-3 rounded-xl bg-secondary text-textPrimary hover:bg-accent hover:text-black border-none font-montserrat text-sm'>Back to all movies</NavLink>
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-10'>
                    <div className=' md:w-1/3 lg:w-1/4'>
                        <img src={poster} alt={title} />
                    </div>
                    <div className='border-l-8 pl-3 xl:pl-10 border-secondary flex items-start flex-col gap-5 md:w-2/3 lg:w-1/4'>
                        <h1 className='font-bebas dark:text-textPrimary text-4xl md:text-7xl'>{title}</h1>
                        <p className='font-montserrat text-xl dark:text-textPrimary'>Genre: <span className='font-bebas'>{genre}</span></p>
                        <p><span className='font-montserrat dark:text-textPrimary text-xl xl:text-lg'>Release year:</span> <span className='dark:text-textPrimary font-bebas text-lg md:text-xl'>{releaseYear}</span></p>
                        <p><span className='font-montserrat dark:text-textPrimary text-xl xl:text-lg'>Duration:</span> <span className='dark:text-textPrimary font-bebas text-lg md:text-xl'>{duration} min</span></p>
                        <div className='w-full'>
                            <h4 className='font-bebas dark:text-textSecondary tracking-widest text-lg'>MOVIE RATING</h4>
                            <div className='flex items-center gap-2'>
                                <div className='text-yellow-500'><FaStar size={40}></FaStar></div>
                                <div>
                                    <p className='dark:text-textSecondary text-lg tracking-wider'><span className='font-bold dark:text-textPrimary text-2xl'>{rating}</span>/5</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start mt-5 w-full'>
                                <h4 className=' font-bebas dark:text-textPrimary text-2xl'>Story summary</h4>
                                <p className='dark:text-textSecondary font-montserrat text-lg'>{summary}</p>
                            </div>
                            <div className='mt-10 flex items-center'>
                                <button onClick={handleSendUpdateMovieData} className='btn mr-3 rounded-xl hover:bg-secondary hover:text-textPrimary bg-accent text-black border-none font-montserrat text-sm'>Update Movie</button>

                                <button onClick={handleAddToFavorite} className='btn rounded-xl bg-secondary text-textPrimary hover:bg-accent hover:text-black border-none font-montserrat text-sm'><span><FaCirclePlus /></span>Add to Favorite</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr className='my-5 mx-auto w-[300px] md:w-[500px] xl:w-[800px]' />
            <div className='flex items-center justify-center'>
                <button onClick={() => handleDeleteMovie(_id)} className='btn mr-3 rounded-xl bg-red-800 text-textPrimary hover:bg-red-600 border-none font-montserrat text-sm w-full'>Delete Movie</button>

            </div>
        </section>
    );
};

export default MovieDetailsPage;
