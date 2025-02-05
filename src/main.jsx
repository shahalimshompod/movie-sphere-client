import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import App from './App';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import HomePage from './Components/HomePage/HomePage';
import AddMovies from './Components/Routes/PrivateRoutes/AddMovies';
import AllMovies from './Components/Routes/PublicRoutes/AllMovies';
import MyFav from './Components/Routes/PrivateRoutes/MyFav';
import ExtraPublicRouteOne from './Components/Routes/PublicRoutes/ExtraPublicRouteOne';
import Login from './Components/Routes/PublicRoutes/Login';
import MovieDetailsPage from './Components/Routes/PrivateRoutes/MovieDetailsPage';
import AuthContextProvider from './Components/AuthContext/AuthContextProvider';
import Register from './Components/Routes/PublicRoutes/Register';
import PrivateRoute from './Components/Routes/PrivateRoutes/PrivateRoute';
import ContextForDeleteMovie from './Components/Routes/PrivateRoutes/ContextForDeleteMovie';
import UpdateMovie from './Components/Routes/PrivateRoutes/UpdateMovie';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => {
          document.title = "Home - MovieSphere";
        }
      },
      {
        path: "/all-movies",
        element: <AllMovies></AllMovies>,
        loader: () => {
          document.title = "All Movies - MovieSphere";
        }
      },
      {
        path: "/add-movies",
        element: <PrivateRoute><AddMovies></AddMovies></PrivateRoute>,
        loader: () => {
          document.title = "Add Movies - MovieSphere";
        }
      },
      {
        path: "/update-movie",
        element: <PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>,
        loader: () => {
          document.title = "Update Movie - MovieSphere";
        }
      },
      {
        path: "/my-favorite-movies",
        element: <PrivateRoute><MyFav></MyFav></PrivateRoute>,
        loader: () => {
          document.title = "My Favorite Movies - MovieSphere";
        }
      },
      {
        path: "/book-tickets",
        element: <ExtraPublicRouteOne></ExtraPublicRouteOne>,
        loader: () => {
          document.title = "Book Tickets - MovieSphere";
        }
      },
      {
        path: "/login",
        element: <Login></Login>,
        loader: () => {
          document.title = "Login - MovieSphere";
        }
      },
      {
        path: "/register",
        element: <Register></Register>,
        loader: () => {
          document.title = "Register - MovieSphere";
        }
      },
      {
        path: "/movie-details/:id",
        element: <PrivateRoute><MovieDetailsPage></MovieDetailsPage></PrivateRoute>,
        loader: ({ params }) => {
          document.title = `Movie Details - MovieSphere`;
          return fetch(`https://movie-portal-server-kappa.vercel.app/movie-details/${params.id}`);
        }
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ContextForDeleteMovie>
        <RouterProvider router={router}>
          <ScrollToTop />
        </RouterProvider>
      </ContextForDeleteMovie>
    </AuthContextProvider>
  </StrictMode>,
);
