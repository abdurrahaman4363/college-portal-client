
import { Link } from "react-router-dom";
import { UserContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const {user, logOut} = useContext(UserContext);

    const handleLogOut = () =>{
        logOut()
        .then(result => console.log(result))
        .catch(error => console.log(error.message))
    }
    const navItem = <>
        <li className="font-bold uppercase"><Link to="/">Home</Link></li>
        <li className="font-bold uppercase"><Link to="/college">Colleges</Link></li>
        <li className="font-bold uppercase"><Link to="/admission">Admission</Link></li>
        <li className="font-bold uppercase"><Link to="/">My College</Link></li>
    </>
  return (
    <div className="fixed z-10 bg-opacity-30 bg-black navbar text-white max-w-6xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl">College Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end">
      {/* <div className="mr-4">
      {
            user && 
                  <>
                <Tippy  content={user.displayName}><img className=" text-white rounded-full" src={user?.photoURL} style={{height: '50px', width: '50px'}}/></Tippy>
            </>
        }
      </div> */}
        {
          user ? 
          <Link onClick={handleLogOut} className="btn btn-success px-6 text-white border-none">Sign Out</Link> :
          <Link to='/login' className="btn btn-success px-6 text-white border-none">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
