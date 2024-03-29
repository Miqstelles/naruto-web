import { useEffect, useState } from "react";
import { Clan, Village } from '../../src/services/api'
import clanData from '../../src/data/clans.json'
import villageData from '../../src/data/villages.json'

import { useDispatch } from 'react-redux';
import { setFilteredItem } from "../redux/action";

import { motion } from "framer-motion";
import { CaretDown, CaretRight, X } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";


export function Filters() {
    const [clans, setClans] = useState<Clan[]>([])
    const ranks = ['Genin', 'Chūnin', 'Jōnin', 'Kage']
    const kages = ['Hokage', 'Tsuchikage', 'Raikage', 'Kazekage', 'Mizukage']
    const tailedBeasts = [1, 153, 345, 480, 669, 711, 771, 1009, 1127, 1134]

    const [villages, setVillages] = useState<Village[]>([])

    const { afiliaton } = useParams<{ afiliaton: any }>()

    useEffect(() => {
        setClans(clanData)
    }, [])

    useEffect(() => {
        setVillages(villageData)
    }, [])

    const dispatch = useDispatch()

    const [isOpen, setOpen] = useState(false)

    const filtersItems = ['Clans', 'Rank', 'Village', 'Kages']
    const [listOpen, setListOpen] = useState(0)

    const toggleListOpen = (index: any) => {
        setListOpen((prevIndex) => {
            if (prevIndex === index) return prevIndex
            else return index
        })
    }

    const [filteredClans, setFilteredClans] = useState<string[]>([])
    const [filteredRanks, setFilteredRanks] = useState<string[]>([])
    const [filteredKages, setFilteredKages] = useState<string[]>([])
    const [filteredVillages, setFilteredVillages] = useState<string[]>([])

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

        else if (listIndex === 3) setFilteredKages(prevKages => prevKages.includes(selectedItems) ?
            prevKages.filter(item => item !== selectedItems)
            :
            [...prevKages, selectedItems])
    }

    useEffect(() => {
        const combinedItems: any = [...filteredClans, ...filteredRanks, ...filteredKages, ...filteredVillages]
        location.pathname === '/TailedBeasts' && combinedItems.push(...tailedBeasts)
        afiliaton && combinedItems.push(afiliaton)
        dispatch(setFilteredItem(combinedItems))
    }, [filteredClans, filteredRanks, filteredKages, filteredVillages, afiliaton])

    return (
        <div>
            <div
                className="w-[330px] h-[83px] sm1:w-[300px] md1:w-[450px] bg-[#C9683C] rounded-t-[5px] flex justify-between items-center px-[28px] mt-[44px]"
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
                className={`w-[330px] h-[272px] sm1:w-[300px] md1:w-[450px] bg-[#C9683C] rounded-b-[5px]  ${!isOpen && 'hidden'}`}
            >
                {isOpen && (
                    <div className="flex justify-between mx-[20px] pt-[24px]">
                        <ul className="font-MPLUS1CODE text-white text-[1.5rem]">
                            {filtersItems.map((items, index) => {
                                return (
                                    <li className="flex justify-between items-center w-full" key={index}>{items}
                                        {listOpen === index ? <button><X size={28} onClick={() => toggleListOpen(index)} /></button>
                                            :
                                            <button><CaretRight size={28} onClick={() => toggleListOpen(index)} /></button>}
                                    </li>
                                )
                            })}
                            <button
                                className="mt-[15px] w-[80px] h-[50px] sm2:w-full bg-[#AD3C23] text-[32px] sm1:text-[24px] rounded-[5px] font-bold"
                                onClick={() => {
                                    setFilteredClans([])
                                    setFilteredRanks([])
                                    setFilteredVillages([])
                                    setFilteredKages([])
                                }}
                            >
                                Reset
                            </button>
                        </ul>

                        <div className="w-[168px] h-[230px] md1:w-[230px] bg-[#E99671] rounded-[5px] overflow-y-scroll ml-[10px] pt-[16px] pb-[16px]">
                            {listOpen === 0 && clans.map((clan, index) => {
                                return (
                                    <div className="flex items-center pl-[14px] gap-[14px]" key={index}>
                                        <input className="checkbox" type="checkbox" value={clan.name}
                                            onChange={handleCheckboxClick}
                                            checked={filteredClans.includes(clan.name)}
                                        />

                                        <label className="font-MPLUS1CODE text-[16px] md1:text-[24px] text-white">
                                            {clan.name}
                                        </label>
                                    </div>
                                )
                            })
                            }

                            {listOpen === 1 && ranks.map((rank, index) => {
                                return (
                                    <div className="flex items-center pl-[14px] gap-[14px]" key={index}>
                                        <input className="checkbox" type="checkbox" value={rank}
                                            onChange={handleCheckboxClick}
                                            checked={filteredRanks.includes(rank)}
                                        />

                                        <label className="font-MPLUS1CODE text-[16px] md1:text-[24px] text-white">
                                            {rank.length >= 16 ? rank.substring(0, 7) + "..." : rank}
                                        </label>
                                    </div>
                                )
                            })
                            }

                            {listOpen === 2 && villages.map((village, index) => {
                                return (
                                    <div className="flex items-center pl-[14px] gap-[14px]" key={index}>
                                        <input className="checkbox" type="checkbox" value={village.name}
                                            onChange={handleCheckboxClick}
                                            checked={filteredVillages.includes(village.name)}
                                        />

                                        <label className="font-MPLUS1CODE text-[16px] md1:text-[24px] text-white">
                                            {village.name.length >= 15 ? village.name.substring(0, 7) + "..." : village.name}
                                        </label>
                                    </div>
                                )
                            })
                            }

                            {listOpen === 3 && kages.map((kage, index) => {
                                return (
                                    <div className="flex items-center pl-[14px] gap-[14px]" key={index}>
                                        <input className="checkbox" type="checkbox" value={kage}
                                            onChange={handleCheckboxClick}
                                            checked={filteredKages.includes(kage)}
                                        />

                                        <label className="font-MPLUS1CODE text-[16px] md1:text-[24px] text-white">
                                            {kage.length >= 15 ? kage.substring(0, 7) + "..." : kage}
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
        </div>
    )
}