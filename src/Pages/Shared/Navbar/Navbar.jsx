import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userPicture from "../../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handlesignOut = () =>{
    logOut()
    .then()
    .catch()
  }

  const navLink = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/career'>Career</NavLink></li>
  </>

  return (
    <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end">
      <label className="btn btn-ghost btn-circle avatar mr-2">
        <div className="w-10 rounded-full">
          <img src={userPicture} />
        </div>
      </label>
      {
        user ? <button onClick={handlesignOut} className="btn bg-[#403F3F] text-white hover:bg-[#403F3F]">Signout</button>
        :
        <Link to='/login'><button className="btn bg-[#403F3F] text-white hover:bg-[#403F3F]">Login</button></Link>
      }
    
  </div>
</div>
    </div>
  );
};

export default Navbar;