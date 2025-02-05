import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import Swal from 'sweetalert2';
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ handleDarkMode, darkMode }) => {
  const { user, userLogout, loading } = useContext(AuthContext)

  // darkMode
  const handleClickToDarkMode = () => {
    handleDarkMode()
  }

  //handle logout user
  const handleLogout = () => {
    userLogout()
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
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
      title: "Logged out successfully"
    });
  }
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-white dark:bg-primary shadow-xl dark:shadow-none">
        <div className="container mx-auto items-center">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden dark:text-white">
                <RxHamburgerMenu size={20} />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-offWhite  dark:bg-charcoal dark:text-textPrimary font-roboto rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <NavLink className='rounded-lg' to='/'><li><div>Home</div></li></NavLink>
                <NavLink className='rounded-lg' to='/all-movies'><li><div>All Movies</div></li></NavLink>
                {
                  user && (
                    <><NavLink className='rounded-lg' to='/add-movies'><li><div>Add Movies</div></li></NavLink>
                      <NavLink className='rounded-lg' to='/my-favorite-movies'><li><div>My Favorites</div></li></NavLink></>
                  )
                }
                <NavLink className='rounded-lg' to='/book-tickets'><li><div>Book Tickets</div></li></NavLink>
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-full">
                <img className="w-12 lg:w-16" src="https://i.ibb.co.com/WxWxLph/Pngtree-film-reel-clipart-3d-rendered-17146123.png" alt="movieSphere" />
              </div>
              <h1 className="text-xl lg:text-5xl font-bebas text-background tracking-widest dark:text-textPrimary hidden lg:flex">MovieSphere</h1>
            </div>

          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-textPrimary font-roboto font-semibold">
              <NavLink className='rounded-lg text-black dark:text-textPrimary' to='/'><li><div>Home</div></li></NavLink>
              <NavLink className='rounded-lg text-black dark:text-textPrimary' to='/all-movies'><li><div>All Movies</div></li></NavLink>
              {/* private routes */}
              {
                user && (<><NavLink className='rounded-lg text-black dark:text-textPrimary' to='/add-movies'><li><div>Add Movies</div></li></NavLink>
                  <NavLink className='rounded-lg text-black dark:text-textPrimary' to='/my-favorite-movies'><li><div>My Favorites</div></li></NavLink></>)
              }

              <NavLink className='rounded-lg text-black dark:text-textPrimary' to='/book-tickets'><li><div>Book Tickets</div></li></NavLink>
            </ul>
          </div>

          {
            loading ?
              (<span className="loading loading-dots loading-xs navbar-end"></span>)
              :
              (<div className="flex items-center navbar-end">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-2">
                    <div className="w-10 rounded-full">
                      {
                        user ? (<img
                          alt={user.displayName || 'User Profile'}
                          title={user.displayName || 'User Profile'}
                          src={user.photoURL} />)
                          :
                          (<div className={`w-full ${darkMode && "text-white"}`}>
                            <CgProfile size={40} />
                          </div>)
                      }
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="block md:hidden menu menu-sm dropdown-content bg-base-100 dark:bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {
                      user ? (<Link onClick={handleLogout} className="rounded-lg dark:text-textPrimary" to='/'><li>Log out</li></Link>)
                        :
                        (<div>
                          <Link className="rounded-lg dark:text-textPrimary" to='/login'><li>Log in</li></Link>
                          <Link className="rounded-lg dark:text-textPrimary" to='/register'><li>Register</li></Link>
                        </div>)
                    }
                  </ul>
                </div>
                <div className="flex items-center">
                  {
                    user ? (<Link onClick={handleLogout}><button className="hidden md:block btn bg-secondary border-none text-textPrimary hover:bg-accent hover:text-black">Log out</button></Link>)
                      :
                      (<div className="hidden md:flex items-center">
                        <Link to='/login'><div className="btn bg-secondary border-none text-textPrimary hover:bg-accent hover:text-black mx-3">Log in</div></Link>
                        <Link to='/register'><div className="btn bg-secondary border-none text-textPrimary hover:bg-accent hover:text-black mx-3">Register</div></Link>
                      </div>)
                  }
                  <div>
                    <button onClick={handleClickToDarkMode} className="btn btn-circle ml-3">{darkMode ? <FaMoon size={25} /> : <MdLightMode size={25} />}</button>
                  </div>
                </div>
              </div>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;

