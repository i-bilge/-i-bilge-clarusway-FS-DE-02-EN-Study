import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NotFound from "./component/404";
import About from "./component/About";
import Contact from "./component/Contact";
import Navigation from "./component/Navigation";
import Posts from "./component/Posts";
import Post from "./component/Post";
import Login from "./component/Login";
import SignUp from "./component/SignUp";

function App() {
  return (
    <div className="App">
      <h1>Router</h1>

      <Navigation />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
