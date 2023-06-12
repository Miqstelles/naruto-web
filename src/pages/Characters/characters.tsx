import { CaretDown } from "@phosphor-icons/react";
import { Navbar } from "../../components/Header/Navbar";

import { useState } from "react";
import { motion } from "framer-motion";


export function Characters() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="bg-[#343434] w-full h-full">
            <header>
                <Navbar
                    items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
                />
            </header>
            <main className="flex flex-col justify-center items-center mt-[32px]">
                <article>
                    <p className="font-MPLUS1CODE font-bold text-white text-[2.5rem] text-center">Characters</p>

                    <div
                        className="w-[330px] h-[83px] bg-[#C9683C] rounded-t-[5px] flex justify-between items-center px-[28px]"
                        onClick={isOpen ? () => setOpen(false) : () => setOpen(true)}
                    >
                        <p className="font-MPLUS1CODE font-bold text-[2.5rem] text-white">Filters</p>

                        <button
                            onClick={isOpen ? () => setOpen(false) : () => setOpen(true)}
                        >
                            <CaretDown size={50} color="#fff" />
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 1, y: isOpen ? 0 : -40 }}
                        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -40 }}
                        transition={{ duration: 0.4 }}
                        className={`w-[330px] h-[272px] bg-[#C9683C] rounded-b-[5px]  ${isOpen ? 'absolute' : 'hidden'}`}
                    >
                        {isOpen && (
                            <ul className="font-MPLUS1CODE text-white text-[1.5rem] ml-[20px] pt-[24px]">
                                <li>Clans</li>
                                <li>Rank</li>
                                <li>Village</li>
                            </ul>
                        )
                        }
                    </motion.div>
                </article>
            </main>
        </div>
    )
}