import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error =>{
            console.log(error);
        })
    }
    const navItems = <>
        <li><Link to='/' className="btn btn-outline btn-accent mr-3">Home</Link></li>
        <li><Link to='/about'  className="btn btn-outline btn-accent mr-3">About</Link></li>
        <li><Link to='/blog'  className="btn btn-outline btn-accent">Blog</Link></li>
        {/* {
            user ? <li onClick={handleLogOut}><Link>Logout</Link></li> :
                <li><Link to='/login'>Login</Link></li>
        } */}

    </>
    return (
        <div className="navbar bg-green-800 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn  btn-ghost normal-case text-xl">
                    <h2 className="text-3xl">KIDS KHELA GHOR</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
               {
                user ? <div>
                     <button onClick={handleLogOut} className="btn btn-outline btn-warning">LogOut</button>
                     <img src="" alt="" />

                </div> : <Link to='/login'>
                    <button className="btn btn-outline btn-wa"> LogIn</button>
                </Link>
               }
            </div>
        </div>
    );
};

export default Navbar;