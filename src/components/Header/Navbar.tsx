import { GithubLogo, LinkedinLogo, MagnifyingGlass, X } from "@phosphor-icons/react";
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

    const [search, setSearch] = useState(location.pathname === '/Characters' ? true : false)

    return (
        <nav>
            <div className={`bg-[#1E1D1D] w-full h-[68px] ${isOpen ? 'flex-row' : 'flex border-b-[2px]'} justify-center md1:justify-evenly lg:justify-center items-center gap-[72px]`}>
                <button
                    className={`w-[50px] h-[50px] ${isOpen && 'mt-[14px] ml-[20px]'} lg:hidden`}
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

                <p className="h-[90px] hidden justify-center items-center gap-[14px] lg:flex">
                    <p className="font-MPLUS1CODE text-[1.5rem] text-[#C9683C]">by miqstelles</p>
                    <a href="https://github.com/miqstelles" target="_blank"><GithubLogo size={32} color="#C9683C" /></a>
                    <a href="https://linkedin.com/in/miquéiastelles" target="_blank"><LinkedinLogo size={32} color="#C9683C" /></a>
                </p>

                <ul className="font-MPLUS1CODE hidden gap-[50px] text-white text-[2.25rem] lg:flex">
                    {props.items.map((item, index) => (
                        <li key={index}><Link to={route[index]}>{item}</Link></li>
                    ))}
                </ul>

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