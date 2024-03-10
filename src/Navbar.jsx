import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="flex justify-between py-4 px-7 absolute top-0 left-0 w-full">
        <Link to="/" className="text-3xl py-2">Home</Link>
        <ul className="flex text-xl justify-between w-[20%] py-3">
            <li >
              <Link to="/questionnaire">Take Quiz</Link>
            </li>
            <li className="mr-4">
              <Link to="/about">About</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar