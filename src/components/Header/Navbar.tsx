import { MagnifyingGlass } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Squash } from "hamburger-react";
import { useState } from "react";

interface NavbarProps {
    items: string[];
}

export function Navbar(props: NavbarProps) {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={`bg-[#1E1D1D] w-full h-[68px] ${isOpen ? 'flex-row' : 'flex'} justify-center items-center gap-[72px]`}>
                <button
                    className={`${isOpen ? 'mt-[14px] ml-[20px]' : null}`}
                    onClick={isOpen ? () => setOpen(false) : () => setOpen(true)}
                >
                    <Squash color="#fff" size={40} />
                </button>

                <p className={`text-white font-Lexend text-[2.5rem]  ${isOpen ? 'hidden' : null}`}>N<span className="text-[#C9683C]">WEB</span></p>

                <MagnifyingGlass color="#fff" size={40} className={`${isOpen ? 'hidden' : null}`} />
            </div>
            <motion.div
                initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                className={`w-full h-[285px] bg-[#1E1D1D] absolute ${isOpen ? 'flex-row' : 'hidden'}`}
            >
                <ul className="font-MPLUS1CODE font-bold text-white text-[40px] ml-[20px] pt-[24px]">
                    {props.items.map((item, index) => (
                        <li key={index}><a href="">{item}</a></li>
                    ))}
                </ul>
            </motion.div>
        </>

    )
}