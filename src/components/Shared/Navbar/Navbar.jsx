import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";



const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext)
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const handleToggle = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "night" : "light"));
    };

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-art-craft">All Art & craft Items</NavLink></li>
        {
            user ? <>
                <li><NavLink to="/update-profile">Update Profile</NavLink></li>
                <li><NavLink to="/update-profile">Update Profile</NavLink></li>
            </> : ""
        }
    </>

    return (
        <div className="bg-slate-200">
            <div className="navbar bg-transparent container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu flex gap-3 menu-horizontal px-3 text-lg font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to="login" className="btn btn-outline btn-primary mr-2 text-base">Login</Link>
                    <Link to="register" className="btn btn-outline btn-secondary text-base">Register</Link>
                    <button onClick={() => LogOut()} className="btn btn-outline btn-secondary text-base">Logout</button> */}

                    
                    <label className="cursor-pointer grid place-items-center">
                        <input
                            onChange={handleToggle}
                            type="checkbox"
                            checked={theme === "night"}
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                        />
                        <svg
                            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>


                    {
                        user ? <div className="flex items-center gap-2">
                            <div data-tip={user.displayName} className="tooltip tooltip-left lg:flex hidden hover:scale-110 border-2 lg:p-1 border-blue-300">
                                <img className="w-10" alt="not found" src={user?.photoURL || "https://i.ibb.co/vj2yqYj/pp.jpg"} />
                            </div>
                            <div>
                                <button className="lg:btn lg:btn-outline mr-5 btn-sm bg-blue-500 text-white lg:font-bold" onClick={() => LogOut()}>Log Out</button>
                            </div>
                        </div> : <div>
                            <Link to="/login"><button className="btn btn-link lg:btn-outline font-bold">Login</button></Link>
                            <Link to="/register"><button className="btn btn-link lg:btn-outline font-bold">Register</button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;