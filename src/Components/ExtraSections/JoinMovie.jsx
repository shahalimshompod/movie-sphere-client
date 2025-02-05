import { Link } from "react-router-dom";

const JoinMovie = () => {
    return (
        <div className="dark:bg-forDark2 pb-28 px-3 xl:px-0">
            <div className="flex flex-col items-center">
                <h1 className="lg:text-4xl text-2xl font-montserrat font-bold dark:text-textPrimary text-center mb-4">Join MovieSphere Now!</h1>
                <p className="text-base font-roboto font-light dark:text-textSecondary text-center lg:w-1/4 mb-4">For getting all the latest update about latest movies & series and also for secure your tickets join with us.</p>
                <Link to='/login'><a className="btn bg-secondary border-none text-textPrimary hover:bg-accent hover:text-black">Join Now</a></Link>
            </div>
        </div>
    );
};

export default JoinMovie;