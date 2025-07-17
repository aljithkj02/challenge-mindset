import { GiHamburgerMenu } from "react-icons/gi";
import b from '../assets/b.jpeg'

export const Navbar = () => {
    return (
        <nav className="border-b border-[#FFD700] border-t-2 fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center shadow-lg"
            style={{ backgroundImage: `url(${b})`, backgroundSize: 'cover' }}
        >
            <h1 className="text-2xl md:text-3xl font-bold text-white">Time For Greatness</h1>

            <GiHamburgerMenu className="text-2xl" />
        </nav>
    );
}