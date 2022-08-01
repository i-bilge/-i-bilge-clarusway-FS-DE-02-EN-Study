
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "../components/Navbar"
import Main from "../pages/Main"
import Login from "../pages/Login"
import Register from "../pages/Register"
import {MovieDetail} from "../pages/MovieDetail"

function AppRouter() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/details" element={<MovieDetail />}/>

        </Routes>
    </Router>
  )
}

export default AppRouter