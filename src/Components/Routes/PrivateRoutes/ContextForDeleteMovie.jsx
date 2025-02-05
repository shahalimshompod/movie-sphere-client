import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const DeleteContext = createContext();

const ContextForDeleteMovie = ({ children }) => {
  const [moviesData, setMoviesData] = useState([]);
  

  const infoContainer = {
    moviesData,
    setMoviesData,
  };

  return (
    <DeleteContext.Provider value={infoContainer}>
      {children}
    </DeleteContext.Provider>
  );
};

export default ContextForDeleteMovie;
