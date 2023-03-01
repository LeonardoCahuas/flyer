/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
    <div className="navbar flex flex-row bg-base-100 px-8">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li className="nav-btns">Team</li>
          <li className="nav-btns">Cosa puoi fare con FLYER</li>
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost nav-btns navbar-btns normal-case ml-2 text-xl">Flyer<i className="fa-solid fa-plane"></i></Link>
    </div>
    <div className="navbar-end full-screen-navbar">
      <a className="btn nav-btns navbar-btns bg-base-100" href="#end-page-login">Registrati</a>
      <a className="btn nav-btns navbar-btns bg-base-100 mx-3" href="#end-page-login">Login</a>
    </div>
  </div>
 )}
