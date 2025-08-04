import logo from '../../assets/images/logo.png'
import coinIcon from '../../assets/images/coin.png'
import { TbBulb } from "react-icons/tb";

const Navbar = ({coin, toggleDarkMood}) => {
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
                <div className="hidden lg:flex items-center mr-4">
                    <button className='text-3xl mr-5' onClick={toggleDarkMood}><TbBulb /></button>
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