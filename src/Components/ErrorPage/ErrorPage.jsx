import { Link, useLocation, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const errorType = useRouteError()

    const Location = useLocation()
    const path = Location.pathname;

    return (
        <section className="bg-textSecondary w-screen h-screen pt-12 px-3 xl:px-0">
            <div className="flex flex-col items-center gap-6">
                <h1 className="md:text-[280px] text-7xl font-bold text-center text-primary font-montserrat flex items-center ">4 <span><img className="md:w-[230px] w-16" src="https://i.ibb.co.com/3R0qqKK/film-1.png" alt="error" /></span> 4</h1>

                <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-semibold font-montserrat">Oops!!!</h3>
                    <p className="font-montserrat">Page {errorType.statusText || errorType.message}</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-2 font-montserrat">
                    <p>Estimated Root Cause:</p>
                    <p className="border-2 bg-accent rounded-full px-2">{path}</p>
                    <p>is not a valid path.</p>
                </div>

                <Link to='/'>
                    <button className="btn rounded-full font-montserrat text-base font-bold text-textPrimary  hover:text-black bg-secondary hover:bg-accent border-none">Go Home</button>
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;