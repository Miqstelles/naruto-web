import { useEffect, useState } from "react";

import { CharacterCard } from "../../components/Character Card/CharacterCard";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Header/Navbar";
import { Clan, Village, fetchClan, fetchVillage } from "../../services/api";

import kunaileft from '../../assets/kunaileft.png'
import kunairight from '../../assets/kunairight.png'

import { motion } from "framer-motion";
import { CaretDown, CaretRight, X } from "@phosphor-icons/react";

export function Characters() {

    const [clans, setClans] = useState<Clan[]>([])
    const ranks = ['Genin', 'Chūnin', 'Jōnin', 'Kage']
    const [villages, setVillages] = useState<Village[]>([])

    useEffect(() => {
        fetchClan(`?page=1&limit=58`)
            .then(response => setClans(response.data.clans))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        fetchVillage(`?page=1&limit=39`)
            .then(response => setVillages(response.data.villages))
            .catch(error => console.log(error))
    }, [])

    const [isOpen, setOpen] = useState(false)

    const filtersItems = ['Clans', 'Rank', 'Village']
    const [listOpen, setListOpen] = useState(0)

    const toggleListOpen = (index: any) => {
        setListOpen((prevIndex) => {
            if (prevIndex === index) return prevIndex
            else return index
        })
    }

    const [filteredClans, setFilteredClans] = useState<string[]>([])
    const [filteredRanks, setFilteredRanks] = useState<string[]>([])
    const [filteredVillages, setFilteredVillages] = useState<string[]>([])

    const [filteredItems, setFilteredItems] = useState<string[]>([])
    console.log(filteredItems)

    const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedItems = event.target.value
        const listIndex = listOpen

        if (listIndex === 0) setFilteredClans(prevClans => prevClans.includes(selectedItems) ?
            prevClans.filter(item => item !== selectedItems)
            :
            [...prevClans, selectedItems])

        else if (listIndex === 1) setFilteredRanks(prevRanks => prevRanks.includes(selectedItems) ?
            prevRanks.filter(item => item !== selectedItems)
            :
            [...prevRanks, selectedItems])

        else if (listIndex === 2) setFilteredVillages(prevVillages => prevVillages.includes(selectedItems) ?
            prevVillages.filter(item => item !== selectedItems)
            :
            [...prevVillages, selectedItems])
    }

    useEffect(() => {
        const combinedItems = [...filteredClans, ...filteredRanks, ...filteredVillages];
        setFilteredItems(combinedItems);
    }, [filteredClans, filteredRanks, filteredVillages]);

    const [page, setPage] = useState(1)

    return (
        <div className="bg-[#343434] w-full h-full">
            <header>
                <Navbar
                    items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
                />
            </header>
            <main className="flex flex-col justify-center items-center mt-[32px] gap-[44px]">
                <article>
                    <p className="font-MPLUS1CODE font-bold text-white text-[2.5rem] text-center">Characters</p>
                    <div
                        className="w-[330px] h-[83px] bg-[#C9683C] rounded-t-[5px] flex justify-between items-center px-[28px] mt-[44px]"
                        onClick={isOpen ? () => setOpen(false) : () => setOpen(true)}
                    >
                        <p className="font-MPLUS1CODE font-bold text-[2.5rem] text-white">Filters</p>

                        <button
                            onClick={isOpen ? () => setOpen(false) : () => setOpen(true)}
                        >
                            {isOpen ? <X size={50} color="#fff" /> : <CaretDown size={50} color="#fff" />}
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 1, y: isOpen ? 0 : -40 }}
                        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -40 }}
                        transition={{ duration: 0.4 }}
                        className={`w-[330px] h-[272px] bg-[#C9683C] rounded-b-[5px]  ${isOpen ? 'absolute' : 'hidden'}`}
                    >
                        {isOpen && (
                            <div className="flex justify-between mx-[20px] pt-[24px]">
                                <ul className="font-MPLUS1CODE text-white text-[1.5rem]">
                                    {filtersItems.map((items, index) => {
                                        return (
                                            <li className="flex justify-between items-center w-full">{items}
                                                {listOpen === index ? <button><X size={28} onClick={() => toggleListOpen(index)} /></button>
                                                    :
                                                    <button><CaretRight size={28} onClick={() => toggleListOpen(index)} /></button>}
                                            </li>
                                        )
                                    })}
                                </ul>

                                <div className="w-[168px] h-[230px] bg-[#E99671] rounded-[5px] overflow-y-scroll pt-[16px] pb-[16px]">
                                    {listOpen === 0 && clans.map(clan => {
                                        return (
                                            <div className="flex items-center pl-[14px] gap-[14px]">
                                                <input className="checkbox" type="checkbox" value={clan.name}
                                                    onChange={handleCheckboxClick}
                                                    checked={filteredClans.includes(clan.name)}
                                                />

                                                <label className="font-MPLUS1CODE text-[16px] text-white">
                                                    {clan.name.length >= 16 ? clan.name.substring(0, 7) + "..." : clan.name}
                                                </label>
                                            </div>
                                        )
                                    })
                                    }

                                    {listOpen === 1 && ranks.map(rank => {
                                        return (
                                            <div className="flex items-center pl-[14px] gap-[14px]">
                                                <input className="checkbox" type="checkbox" value={rank}
                                                    onChange={handleCheckboxClick}
                                                    checked={filteredRanks.includes(rank)}
                                                />

                                                <label className="font-MPLUS1CODE text-[16px] text-white">
                                                    {rank.length >= 16 ? rank.substring(0, 7) + "..." : rank}
                                                </label>
                                            </div>
                                        )
                                    })
                                    }

                                    {listOpen === 2 && villages.map(village => {
                                        return (
                                            <div className="flex items-center pl-[14px] gap-[14px]">
                                                <input className="checkbox" type="checkbox" value={village.name}
                                                    onChange={handleCheckboxClick}
                                                    checked={filteredVillages.includes(village.name)}
                                                />

                                                <label className="font-MPLUS1CODE text-[16px] text-white">
                                                    {village.name.length >= 1 ? village.name.substring(0, 7) + "..." : village.name}
                                                </label>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        )
                        }
                    </motion.div>
                </article>

                <CharacterCard
                    page={page}
                    limit={5}
                    pageControler={true}
                />
                <div className="flex items-center gap-[20px] font-MPLUS1CODE font-bold text-[2rem] text-white">
                    <div className={page === 1 ? 'invisible' : ''}><button onClick={() => page === 1 ? setPage(1) : page === 286 ? setPage(284) : setPage(page - 1)}><img src={kunaileft} alt="" height="20px" /></button></div>

                    <p>{page}</p>

                    <div className={page === 286 ? 'invisible' : ''}><button onClick={() => page === 284 ? setPage(286) : setPage(page + 1)}><img src={kunairight} alt="" height="20px" /></button></div>
                </div>
            </main>
            <Footer />
        </div >
    )
}