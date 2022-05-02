import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* <Link to='/'>Home</Link>   
       <Link to='/products'>Products</Link>   
       <Link to='/about'>About</Link > */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : undefined
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : undefined
        }
      >
       About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : undefined
        }
      >
        Products
      </NavLink>
    </div>
  );
};

export default Navbar;
