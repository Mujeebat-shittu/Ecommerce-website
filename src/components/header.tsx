import Logo from "../assets/logo.svg"
import Cart from "./cart";
import Avatar from "../assets/image-avatar.png"
import { Menu, X } from "lucide-react";
import { useState } from "react";




function Header() {

    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => {
        setToggle(!toggle);
    };

    const [active, setActive] = useState("cart");
    const links = ["Collections", "Men", "Women", "About", "Contact"];



    return (
        <header className="flex items-center justify-between ml-10 h-[70px]">
            <div
                className="icons flex  items-center justify-center md:hidden mr-6"
                onClick={toggleMenu}
            >
                {toggle ? <X /> : <Menu className="cursor-pointer ml-5" />}
            </div>

            <div>
                <img src={Logo} alt="Logo" className="ml-5" />
            </div>

            {/* nav desktop */}

            <div className="hidden md:flex flex-row p-4 justify-between items-center text-[var(--grayish-blue)]">
                <div className="">
                    <ul className="flex flex-row p-4 m-4 gap-4 cursor-pointer">
                        {links.map((link) => (
                            <li
                                key={link}
                                onClick={() => setActive(link)}
                                className={`relative pb-1 capitalize ${active === link
                                    ? "text-[var(--dark-grayish-blue)] after:content-[''] after:absolute after:left-0 after:top-15 after:w-full after:h-[3px] after:bg-[#ff7d1a]"
                                    : "text-gray-600"
                                    }`}
                            >
                                {link}
                            </li>
                        ))}

                    </ul>

                </div>

            </div>


            {/* nav mobile */}

            <div className={` ${toggle ? "flex" : "hidden"} flex flex-col p-4 justify-between items-center my-5 transition-[0.5s height ease-in-out] h-[100%] fixed w-[60%] -top-5 bg-white left-0 z-20 `}>

                <div className="">
                    <div className="self-end absolute right-10 top-4 " onClick={toggleMenu}>
                        <X size={30} strokeWidth={3} className="cursor-pointer" />
                    </div>
                    <ul className="flex flex-col p-4 m-4 my-10 gap-4 cursor-pointer font-semibold text-lg">
                        <li>Collections</li>
                        <li className="">Men </li>
                        <li className="">Women</li>
                        <li className="">About</li>
                        <li className="">Contact</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-row mx-4 gap-4 items-center justify-center">

                {/* <Cart/> */}

                <Cart />

                <img src={Avatar} alt="" className="w-1/3" />
            </div>


        </header>
    )
}

export default Header