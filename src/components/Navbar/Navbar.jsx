import logo from '../../assets/images/logo.png'
import coinIcon from '../../assets/images/coin.png'

const Navbar = ({coin, toggleTheme}) => {
    return (
        
        <div className="navbar px-4 pt-8">
            {/* Navbar Start - Logo */}
            <div className="navbar-start">
                <img src={logo} alt="Logo" className="w-20 h-20 cursor-pointer" />
            </div>

            {/* Navbar Center */}
            <div className="navbar-center flex justify-center">
                {/* ✅ Mobile Coin (center) */}
                <div className="lg:hidden">
                <p className="flex border border-gray-200 p-2 px-6 rounded-xl font-bold items-center gap-1">
                    <span>{coin}</span> coin
                    <img className="w-5 h-5" src={coinIcon} alt="coin" />
                </p>
                </div>

                {/* ✅ Desktop Menu */}
                <ul className="hidden lg:flex flex-wrap justify-center gap-8 text-gray-500 font-semibold">
                {['Home', 'Fixture', 'Teams', 'Schedules'].map((item, idx) => (
                    <li key={idx} className="group relative hover:text-blue-950 cursor-pointer">
                    <span className="relative">
                        {item}
                        <span className="absolute left-0 -bottom-1.5 h-0.5 w-0 bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    </li>
                ))}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">

                {/* ✅ Desktop Coin (top right) */}
                <div className="hidden lg:flex items-center">
                    <label class="swap swap-rotate mr-4">
  
                <input onClick={toggleTheme} type="checkbox" class="theme-controller" value="synthwave" />
                <svg
                    class="swap-off h-8 w-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                
                <svg
                    class="swap-on h-8 w-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
                </label>
                <p className="flex border border-gray-200 p-2 px-6 rounded-xl font-bold items-center gap-1">
                    <span>{coin}</span> coin
                    <img className="w-5 h-5" src={coinIcon} alt="coin" />
                </p>
                </div>

                {/* ✅ Mobile Dropdown */}
                <div className="dropdown dropdown-end lg:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 text-gray-700 font-semibold"
                >
                    {['Home', 'Fixture', 'Teams', 'Schedules'].map((item, idx) => (
                    <li key={idx}>
                        <a className="hover:text-blue-950">{item}</a>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
         </div>

    );
};

export default Navbar;