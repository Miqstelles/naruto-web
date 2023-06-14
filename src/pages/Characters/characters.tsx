import { CaretDown, CaretRight, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Navbar } from "../../components/Header/Navbar";
import { fetchClan, Clan } from "../../services/api";
import { Filters } from "../../components/Filters";

export function Characters() {
    const [clans, setClans] = useState<Clan[]>([])

    const [isOpen, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const filtersItems = ['Clans', 'Rank', 'Village']
    const [listOpen, setListOpen] = useState(0)

    const toggleListOpen = (index: any) => {
        setListOpen((prevIndex) => {
            if (prevIndex === index) return prevIndex
            else return index
        })
    }

    useEffect(() => {
        setLoading(true)

        fetchClan(`?page=1&limit=58`)
            .then(response => setClans(response.data.clans))
            .catch(error => console.log(error))

        const timer = setTimeout(() => {
            setLoading(false)
        }, 0);

        setClans([])

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-[#343434] w-full h-full">
            <header>
                <Navbar
                    items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
                />
            </header>
            <main className="flex flex-col justify-center items-center mt-[32px] ">
                <article>
                    <p className="font-MPLUS1CODE font-bold text-white text-[2.5rem] text-center">Characters</p>
                    <Filters />
                </article>
            </main>
        </div >
    )
}