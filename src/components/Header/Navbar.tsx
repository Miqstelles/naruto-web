import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Squash } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Input";

interface NavbarProps {
    items: string[];
}

export function Navbar(props: NavbarProps) {
    const [isOpen, setOpen] = useState(false)
    const route = ['/Characters', '/Clans', '/Characters/Akatsuki', '/TailedBeasts']

    const [search, setSearch] = useState(false)

    return (
        <nav>
            <div className={`bg-[#1E1D1D] w-full h-[68px] ${isOpen ? 'flex-row' : 'flex border-b-[2px]'} justify-center items-center gap-[72px]`}>
                <button
                    className={`w-[50px] h-[50px] ${isOpen && 'mt-[14px] ml-[20px]'}`}
                    onClick={isOpen
                        ? () => setOpen(false)
                        : () => { setOpen(true), setSearch(false) }
                    }
                >
                    <Squash color="#fff" size={40} />
                </button>

                <p className={`text-white font-Lexend text-[2.5rem]  ${isOpen && 'hidden'}`}>
                    <Link to={'/'}>N<span className="text-[#C9683C]">WEB</span></Link>
                </p>

                <button
                    className={`w-[50px] h-[50px] ${isOpen && 'mt-[14px] ml-[20px]'}`}
                    onClick={search
                        ? () => setSearch(false)
                        : () => {
                            location.pathname === '/Characters' && setSearch(true), setOpen(false)
                            location.pathname != '/Characters' && location.replace('/Characters')
                        }
                    }
                >
                    {!search
                        ? <MagnifyingGlass color="#fff" size={40} className={`${isOpen && 'hidden'}`} />
                        : <X color="#fff" size={40} className={`${isOpen && 'hidden'}`} />
                    }
                </button>
            </div>

            <motion.div
                initial={{ opacity: 1, y: isOpen ? 0 : -40 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -40 }}
                transition={{ duration: 0.4 }}
                className={`w-full h-[285px] bg-[#1E1D1D] ${isOpen ? 'absolute z-[2]' : 'hidden'}`}
            >
                {isOpen && (
                    <ul className="font-MPLUS1CODE font-bold text-white text-[2.5rem] ml-[20px] pt-[24px]">
                        {props.items.map((item, index) => (
                            <li key={index}><Link to={route[index]}>{item}</Link></li>
                        ))}
                    </ul>
                )}
            </motion.div>

            <Input
                search={search}
            />
        </nav>
    )
}