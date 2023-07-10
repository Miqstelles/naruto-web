import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Character, fetchCharacter } from "../../services/api";
import { Navbar } from "../../components/Header/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { CaretRight } from "@phosphor-icons/react";

import { motion } from "framer-motion";
import { SkeletonCharacterDetail } from "../../components/Skeletons/SkeletonCharacterDetail";

export function CharacterDetails() {
    const { id } = useParams<{ id: string }>()
    const [character, setCharacter] = useState<Character[]>([])
    const [part, setPart] = useState(true)

    const page = ['Personal', 'Jutsus']
    const [currentPage, setCurrentPage] = useState(0)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetchCharacter(`?page=${Number(id) + 1}&limit=1`)
            .then(response => setCharacter(response.data.characters))
            .catch(error => console.log(error))
    })

    useEffect(() => {
        character.length >= 1 ? setLoading(false) : setLoading(true)
    })

    return (
        <div className="bg-[#343434] w-full h-full">
            <header>
                <Navbar
                    items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
                />
            </header>

            <main className="flex justify-center items-center ">
                {loading && <SkeletonCharacterDetail />}

                {!loading && character.map(character => {
                    const characterImg = character.images[character.images.length === 1 ? 0 : part ? 1 : 0]?.replace(/\/revision\/.*$/, '')

                    return (
                        <div className="w-[330px] h-full pb-[20px] bg-[#C9683C] font-MPLUS1CODE mt-[20px] rounded-[5px]" key={character.id}>
                            {character.personal.height?.["Part I"] && character.personal.height?.["Part II"] &&
                                <div className="w-full h-[44px] flex justify-between bg-white rounded-t-[5px] text-black">
                                    <div className={`${!part ? 'bg-[#C9683C] mt-[42px] w-[165px] h-[3px]' : 'w-0 ml-[77px]'} flex justify-center text-[1.25rem]`}>
                                        <button
                                            onClick={() => setPart(false)}
                                            className={!part ? 'text-[#C9683C] mt-[-42px]' : 'text-black mt-1'}
                                        >
                                            Classic
                                        </button>
                                    </div>

                                    <div className={`${part ? 'bg-[#C9683C] mt-[42px] w-[165px] h-[3px]' : 'w-0 mr-[77px]'} flex justify-center text-[1.25rem]`}>
                                        <button
                                            onClick={() => setPart(true)}
                                            className={part ? 'text-[#C9683C] mt-[-42px]' : 'text-black mt-0'}
                                        >
                                            Shippuden
                                        </button>
                                    </div>
                                </div>
                            }
                            <img src={characterImg} alt={character.name} title={character.name} className="w-full h-[291px]" />

                            <div className="text-white">
                                <h1 className="text-center text-[2.5rem] font-bold mt-[17px]">{character.name}</h1>

                                <div className="grid-cols-2 mx-[10px] text-[24px]">
                                    <div className="flex justify-between">
                                        <p className="text-center mt-[16px]">
                                            <span className="font-bold">Clan: </span>
                                            {character.personal.clan ? character?.personal?.clan?.length >= 16 ? character.personal.clan.substring(0, 7) + "..." : character.personal.clan : 'unknown'}
                                        </p>

                                        <p className="text-center mt-[16px]">
                                            <span className="font-bold">Age: </span>
                                            {character.personal.age
                                                ? character.personal.age[part ? 'Part II' : 'Part I']
                                                    ? character.personal.age[part ? 'Part II' : 'Part I']
                                                    : 'unknown'
                                                : 'unknown'
                                            }
                                        </p>

                                    </div>

                                    <div className="mt-[15px] text-center">
                                        {character.personal.status ?
                                            <p><span className="font-bold">Status: </span> Dead</p>
                                            :
                                            <p><span className="font-bold">Status: </span> Alive</p>
                                        }
                                    </div>
                                </div>

                                <div className={`bg-[#E29A79] font-bold text-[2.5rem] text-center drop-shadow-lg  select-none`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className={`h-[66px] flex items-center ${character.jutsu ? 'justify-between px-[44px]' : 'justify-center'} mt-[28px]`}
                                    >
                                        <p>
                                            {page[currentPage]}</p>
                                        <button
                                            onClick={() => currentPage === 1 ? setCurrentPage(0) : setCurrentPage(1)}
                                            className={character.jutsu ? '' : 'hidden'}
                                        >
                                            <CaretRight size={48} />
                                        </button>
                                    </motion.div>
                                </div>

                                <div
                                    className=
                                    {`ml-[25px] mt-[30px] text-[1.5rem] grid gap-[18px] h-[300px] ${currentPage === 1 && 'overflow-y-scroll scrollbar-thin scrollbar-thumb-[#E29A79] scrollbar-track-white'}`}
                                >
                                    {currentPage === 0 &&
                                        <>
                                            <p>
                                                <span className="font-bold">Sex: </span>
                                                {character.personal.sex ? character.personal.sex : 'unknown'}
                                            </p>

                                            <p>
                                                <span className="font-bold">Height </span>
                                                {character.personal.height ? character.personal.height[part ? 'Part II' : 'Part I'] : 'unknown'}
                                            </p>

                                            <p>
                                                <span className="font-bold">Weight: </span>
                                                {character.personal.weight ? character.personal.weight[part ? 'Part II' : 'Part I'] : 'unknown'}
                                            </p>

                                            <p>
                                                <span className="font-bold">Rank: </span>
                                                {character.rank?.ninjaRank?.[part ? 'Part II' : 'Part I'] ? character.rank.ninjaRank[part ? 'Part II' : 'Part I'] : 'unknown'}
                                            </p>

                                            <p>
                                                <span className="font-bold">Birthdate: </span>
                                                {character.personal.birthdate ? character.personal.birthdate : 'unknown'}
                                            </p>
                                        </>
                                    }

                                    {currentPage === 1 && character.jutsu &&
                                        <div>{character.jutsu.map((jutsus, index) => {
                                            return (
                                                <p key={index}>{`${index + 1} ` + jutsus}</p>
                                            )
                                        })}</div>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </main>
            <Footer />
        </div>
    )
}