import React, { useState } from "react";
import "../index.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import useOnline from "../utils/useOnline";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkOnline = useOnline();

  // function login(){
  //   setIsLoggedIn(true)
  // }
  // function logout(){
  //   setIsLoggedIn(false)
  // }

  return (
    <>
      <div className="flex justify-between align-middle bg-pink-100">
        <a href="/ ">
          <img
            width={"100rem"}
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725062400&semt=ais_hybrid"
          />
        </a>

        <li className="flex py-5 px-4  items-center">
          <ul>{checkOnline ? "✅" : "🔴"}</ul>

          <ul className="px-4 ">
            <Link to="/" activeClassName="active">
              Products
            </Link>
          </ul>
          <ul className="px-4 ">
            <Link to="/instamart">Instamart</Link>
          </ul>

          <ul className="px-4">
            <Link to="/about">About</Link>
          </ul>
          <ul className="px-4">
            <Link to="/contact">Contact</Link>
          </ul>
          <ul className="px-4">
            <Link to="/blogs">Blogs</Link>
          </ul>
          <FaCartShopping fontSize="2rem" />
        </li>
      </div>

      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </>
  );
}

export default Header;
