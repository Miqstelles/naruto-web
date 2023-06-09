import { MagnifyingGlass } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Squash } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
    items: string[];
}

export function Navbar(props: NavbarProps) {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav>
            <div className={`bg-[#1E1D1D] w-full h-[68px] ${isOpen ? 'flex-row ' : 'flex border-b-[2px]'} justify-center items-center gap-[72px] `}>
                <button
                    className={`w-[50px] h-[50px] ${isOpen ? 'mt-[14px] ml-[20px]' : null}`}
                    onClick={isOpen ? () => setOpen(false) : () => setOpen(true)}
                >
                    <Squash color="#fff" size={40} />
                </button>

                <p className={`text-white font-Lexend text-[2.5rem]  ${isOpen ? 'hidden' : null}`}>N<span className="text-[#C9683C]">WEB</span></p>

                <MagnifyingGlass color="#fff" size={40} className={`${isOpen ? 'hidden' : null}`} />
            </div>

            <motion.div
                initial={{ opacity: 1, y: isOpen ? 0 : -40 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -40 }}
                transition={{ duration: 0.4 }}
                className={`w-full h-[285px] bg-[#1E1D1D]  ${isOpen ? 'absolute' : 'hidden'}`}
            >
                {isOpen && (
                    <ul className="font-MPLUS1CODE font-bold text-white text-[2.5rem] ml-[20px] pt-[24px]">
                        {props.items.map((item, index) => (
                            <li key={index}><Link to={`/${item}`}>{item}</Link></li>
                        ))}
                    </ul>
                )}
            </motion.div>
        </nav>
    )
}