import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode && 'dark'}`}>
      <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode}></Navbar>
      <Outlet context={{ darkMode }}></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
