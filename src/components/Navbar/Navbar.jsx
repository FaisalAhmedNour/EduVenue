import { Link } from "react-router-dom";

const Navbar = () => {
    // TODO: activate links
    const listItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/colleges'>Colleges</Link></li>
        <li><Link to='/admission'>Admission</Link></li>
        <li><a>My College</a></li>
    </>

    return (
        <div className="navbar bg-white rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            listItems
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">EduVenue</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        listItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#f3f3f3]">Log in</a>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full border-2 border-[#7070ce]">
                        <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;