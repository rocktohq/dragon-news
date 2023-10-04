import { NavLink } from "react-router-dom"
import UserIcon from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out");
      })
      .catch(error => {
        toast.error(error.message);
        console.error(error.message)
      })
  }

  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/career">Career</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-gray-500 flex gap-5 text-lg">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <img className="w-12 h-12 mr-2 rounded-full" src={
          user?.photoURL ? user.photoURL : UserIcon
        } alt="" />
        {
          user
            ? <button onClick={handleLogOut} className="btn btn-neutral rounded">Logout</button>
            : <NavLink to="/login"><button className="btn btn-neutral rounded">Login</button></NavLink>
        }
      </div>
    </div>
  )
}

export default Navbar
