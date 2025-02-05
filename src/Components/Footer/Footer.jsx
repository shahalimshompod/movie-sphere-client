import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { PiCopyrightLight } from "react-icons/pi";

const Footer = () => {
    return (
        <div className="bg-white dark:bg-primary border-t-2 dark:border-none">

            <footer className="container mx-auto flex flex-col items-center text-textPrimary p-5 sm:p-10">

                <div className="flex items-center gap-2 mb-4">
                    <div className="w-full">
                        <img className="w-16 lg:w-24" src="https://i.ibb.co.com/WxWxLph/Pngtree-film-reel-clipart-3d-rendered-17146123.png" alt="movieSphere" />
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bebas text-black dark:text-white tracking-widest">MovieSphere</h1>
                </div>

                <nav className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-8 py-6 border border-textSecondary rounded-2xl w-full max-w-xl sm:px-10 dark:text-white text-black">
                    <FaFacebook size={25} className="sm:size-30 lg:size-35 hover:cursor-pointer" />
                    <FaInstagram size={25} className="sm:size-30 lg:size-35 hover:cursor-pointer" />
                    <AiFillTikTok size={25} className="sm:size-30 lg:size-35 hover:cursor-pointer" />
                    <BsTwitterX size={25} className="sm:size-30 lg:size-35 hover:cursor-pointer" />
                    <IoLogoYoutube size={25} className="sm:size-30 lg:size-35 hover:cursor-pointer" />
                </nav>

                <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 my-4 text-sm sm:text-base md:text-lg dark:text-white text-black">
                    <h6 className="font-montserrat tracking-wide flex items-center hover:underline hover:cursor-pointer">
                        <span>Help</span>
                        <MdArrowOutward className="ml-1" />
                    </h6>
                    <a className="link link-hover font-montserrat flex items-center">
                        <span>About us</span>
                        <MdArrowOutward className="ml-1" />
                    </a>
                    <a className="link link-hover font-montserrat flex items-center">
                        <span>MovieSpherePro</span>
                        <MdArrowOutward className="ml-1" />
                    </a>
                    <a className="link link-hover font-montserrat flex items-center">
                        <span>Box Office Mojo</span>
                        <MdArrowOutward className="ml-1" />
                    </a>
                    <a className="link link-hover font-montserrat flex items-center">
                        <span>License MovieSphere Data</span>
                        <MdArrowOutward className="ml-1" />
                    </a>
                </nav>

                <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 my-4 text-sm sm:text-base md:text-lg dark:text-white text-black">
                    <h6 className="font-montserrat tracking-wide flex items-center hover:underline hover:cursor-pointer">
                        <span>Press Room</span>
                        <MdArrowOutward className="ml-1" />
                    </h6>
                    <a className="link link-hover font-montserrat flex items-center">
                        <span>Advertising</span>
                        <MdArrowOutward className="ml-1" />
                    </a>
                    <a className="link link-hover font-montserrat flex items-center">
                        <span>Jobs</span>
                        <MdArrowOutward className="ml-1" />
                    </a>
                    <a className="link link-hover font-montserrat flex items-center">
                        <span>Conditions of Use</span>
                        <MdArrowOutward className="ml-1" />
                    </a>
                    <a className="link link-hover font-montserrat flex items-center">
                        <span>Privacy Policy</span>
                        <MdArrowOutward className="ml-1" />
                    </a>
                    <a className="link link-hover font-montserrat flex items-center">
                        <span>Your Ads Privacy Choices</span>
                        <MdArrowOutward className="ml-1" />
                    </a>
                </nav>

                <form className="flex flex-col items-center gap-4 w-full max-w-lg my-5 dark:text-white text-black">
                    <h6 className="text-xl sm:text-2xl lg:text-3xl font-light font-montserrat tracking-wide">
                        Newsletter
                    </h6>
                    <fieldset className="form-control w-full px-3 sm:px-6 md:px-8 ">
                        <label className="label">
                            <span className="label-text dark:text-textPrimary text-black font-montserrat">
                                Enter your email address
                            </span>
                        </label>
                        <div className="join w-full">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item font-montserrat w-2/3"
                            />
                            <button className="btn bg-secondary border-none text-textPrimary hover:bg-accent hover:text-black join-item font-montserrat w-1/3">
                                Subscribe
                            </button>
                        </div>
                    </fieldset>
                </form>

                <p className="flex items-center justify-center mt-4 text-xs sm:text-sm font-montserrat dark:text-white text-black">
                    <PiCopyrightLight className="mr-1" />
                    <span>2021-2024 by MovieSphere.surge.sh Inc.</span>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
