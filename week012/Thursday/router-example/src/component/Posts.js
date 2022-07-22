import React from 'react'
import Post from './Post'
import { Link } from "react-router-dom";

function Posts() {
  return (
    <ul>
        <li>
            <Link to="/post/1">Post 1</Link>
        </li>
        <li>
            <Link to="/post/2">Post 2</Link>
        </li>
        <li>
            <Link to="/post/3">Post 3</Link>
        </li>
    </ul>
  )
}

export default Posts