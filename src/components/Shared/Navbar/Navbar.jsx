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
        setTheme((prevTheme) => (prevTheme === "light" ? "synthwave" : "light"));
    };

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-art-craft">All Art & craft Items</NavLink></li>
        <li><NavLink to="/add-craft-item">Add Craft Item</NavLink></li>
        <li><NavLink to="/my-art-and-craft-list">My Art & Craft List</NavLink></li>
    </>

    return (
        <div className="shadow-xl py-4 fira-sans">
            <div className="navbar bg-transparent container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown z-10">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-3xl text-black">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu flex gap-1 menu-horizontal px-3 text-xl font-semibold text-black">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    <label className="cursor-pointer hidden lg:grid place-items-center mr-3">
                        <input
                            onChange={handleToggle}
                            type="checkbox"
                            checked={theme === "synthwave"}
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
                            <div data-tip={user.displayName} className="tooltip tooltip-bottom lg:flex hidden hover:scale-110 border-2 lg:p-1 border-blue-300">
                                <img className="w-10" alt="NF" src={user ?user?.photoURL : "https://i.ibb.co/vj2yqYj/pp.jpg"} />
                            </div>
                            <div>
                            <button onClick={() => LogOut()} type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 hover:scale-105">Logout</button>
                            </div>
                        </div> : <div className="mr-2 flex gap-2">
                            <Link to="/login"><button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 hover:scale-105 transition-all">Login</button></Link>
                            <Link to="/register"><button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 lg:flex hidden hover:scale-105 transition-all">Register</button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;