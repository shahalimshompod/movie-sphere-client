import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthContext/AuthContextProvider";
import { Rating } from "react-simple-star-rating";
import Swal from 'sweetalert2'

const AddMovies = () => {
    const [rating, setRating] = useState(0);
    const { user } = useContext(AuthContext);
    const [ratingError, setRatingError] = useState("");
    // key for reset rating component after success
    const [ratingKey, setRatingKey] = useState(0);
    const formRef = useRef(null);

    // react hook form function
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Rating handler
    const handleRating = (rate) => {
        setRating(rate);
        setRatingError("");
    };

    // Form submission handler
    const onSubmit = (data) => {
        if (rating === 0) {
            setRatingError("Rating is required");
            return;
        }

        const userEmail = user.email;
        const addedMovies = { ...data, rating, userEmail };


        // form data from here to server
        fetch('https://movie-portal-server-kappa.vercel.app/all-movies', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addedMovies)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Got it'

                    }).then((result) => {
                        if (result.isConfirmed) {
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
                                title: "Movie added successfully"
                            });
                            //   formRef.current.reset();
                            setRating(0);
                            setRatingKey((prev) => prev + 1)
                        }
                    })



                        ;
                }
            })
    };

    return (
        <section className="dark:bg-forDark2  py-10 xl:py-36 px-3 xl:px-0">
            <div className="container mx-auto">
                <h1 className="dark:text-textPrimary font-bebas text-5xl text-center mb-4">
                    Add a Movie
                </h1>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                    {/* Movie Title and Poster */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Movie Title"
                                {...register("title", {
                                    required: "Movie title is required",
                                    minLength: {
                                        value: 2,
                                        message: "Title must have at least 2 characters",
                                    },
                                })}
                                className="input input-bordered w-full font-roboto"
                            />
                            {errors.title && (
                                <p className="text-red-500 text-sm">{errors.title.message}</p>
                            )}
                        </div>
                        <div className="w-full max-w-xs">
                            <input
                                type="url"
                                placeholder="Movie Poster (URL)"
                                {...register("poster", {
                                    required: "Poster link is required",
                                    pattern: {
                                        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                                        message: "Must be a valid URL",
                                    },
                                })}
                                className="input input-bordered w-full font-roboto"
                            />
                            {errors.poster && (
                                <p className="text-red-500 text-sm">{errors.poster.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Genre and Duration */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-full max-w-xs">
                            <select
                                {...register("genre", { required: "Genre is required" })}
                                className="select select-bordered w-full font-roboto"
                            >
                                <option value="">Select Genre</option>
                                <option value="comedy">Comedy</option>
                                <option value="drama">Drama</option>
                                <option value="horror">Horror</option>
                                <option value="action">Action</option>
                                <option value="romance">Romance</option>
                            </select>
                            {errors.genre && (
                                <p className="text-red-500 text-sm">{errors.genre.message}</p>
                            )}
                        </div>
                        <div className="w-full max-w-xs">
                            <input
                                type="number"
                                placeholder="Duration (mins)"
                                {...register("duration", {
                                    required: "Duration is required",
                                    min: {
                                        value: 60,
                                        message: "Duration must be at least 60 minutes",
                                    },
                                })}
                                className="input input-bordered w-full font-roboto"
                            />
                            {errors.duration && (
                                <p className="text-red-500 text-sm">{errors.duration.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Release Year and Rating */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-full max-w-xs">
                            <select
                                {...register("releaseYear", {
                                    required: "Release year is required",
                                })}
                                className="select select-bordered w-full font-roboto"
                            >
                                <option value="">Select Release Year</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                            </select>
                            {errors.releaseYear && (
                                <p className="text-red-500 text-sm">
                                    {errors.releaseYear.message}
                                </p>
                            )}
                        </div>

                        {/* Rating */}
                        <div className="flex flex-col items-start">
                            <h1 className="font-montserrat dark:text-textPrimary">Movie rating</h1>
                            <div className="flex flex-col md:flex-row items-center">
                                <Rating
                                    key={ratingKey}
                                    allowFraction={true}
                                    onClick={handleRating}
                                    ratingValue={rating}
                                    emptyColor="gray"
                                    SVGstyle={{ display: "inline" }}
                                    size={window.innerWidth < 500 ? 20 : 30}
                                />
                                <p className="mt-2 dark:text-textPrimary font-montserrat">
                                    {rating} / 5
                                </p>
                            </div>
                            {ratingError && <p className="text-red-600">{ratingError}</p>}
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="flex flex-col items-center justify-center w-1/3 mx-auto gap-4">
                        <textarea
                            {...register("summary", {
                                required: "Summary is required",
                                minLength: {
                                    value: 10,
                                    message: "Summary must be at least 10 characters",
                                },
                            })}
                            className="textarea textarea-bordered w-72 lg:w-full font-roboto"
                            placeholder="Story summary"
                        ></textarea>
                        {errors.summary && (
                            <p className="text-red-500 text-sm">{errors.summary.message}</p>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn bg-secondary border-none text-textPrimary hover:bg-accent hover:text-black"
                        >
                            Add Movie
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddMovies;

